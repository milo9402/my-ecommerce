import Header from "components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Carvajal E-commerce</title>
                <meta name="description" content="Ecommerce App using NextJs" />
                <link rel="icon" href="/carvajal-favicon.png" />
            </Head>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout;
