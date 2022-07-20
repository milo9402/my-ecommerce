import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import { useRouter } from "next/router";

const Layout = ({ children }) => {

    const currentRoute = useRouter()
    const customLayout = () => {
        if(currentRoute.route === '/login'){
            return (
                <main className="flex-grow">
                    {children}
                </main>
            )
        } else {
            return (
                <>
                    <Header />
                    <main className="flex-grow bg-gray-100 dark:bg-gray-500">
                        {children}
                    </main>
                    <Footer />
                </>
            )
        }
    }

    return (
        <>
            <Head>
                <title>Carvajal E-commerce</title>
                <meta name="description" content="Ecommerce App using NextJs" />
                <link rel="icon" href="/carvajal-favicon.png" />
            </Head>
            <div className="min-h-screen flex flex-col">
                {customLayout()}
            </div>
        </>
    )
}

export default Layout;
