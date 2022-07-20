import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

const secret = process.env.SECRET;
const baseUrl = process.env.HOST;

export function middleware(req) {
  const { cookies } = req;
  const jwt = cookies.OursiteJWT;
  const url = req.url;

  if (url.includes("/login")) {
    if (jwt) {
      try {
        verify(jwt, secret);
        return NextResponse.redirect( `${baseUrl}/` );
      } catch (error) {
        return NextResponse.next();
      }
    }
  }

  if (url.includes(["/","/checkout","product/"])) {
    if (jwt === undefined) {
      return NextResponse.redirect(`${baseUrl}/login`);
    }
    try {
      verify(jwt, secret);
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(`${baseUrl}/login`);
    }
  }
  return NextResponse.next();
}
