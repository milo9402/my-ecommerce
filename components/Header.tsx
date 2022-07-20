import Link from "next/link";
import Button from "@/components/Button";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Header = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    const navigations = [
        { label: 'Productos', path:'/'},
        { label: 'Acerca de mi', path:'/about'},
    ];

    const renderThemeChanger = () => {

        if(!mounted) return null;
        
        const currentTheme = theme === 'system' ? systemTheme : theme;
        
        if(currentTheme === 'dark') {
          return (
            <>
              <Button className=" bg-green-300 dark:bg-gray-600" onClick={undefined}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </Button>
              <Button className="ml-2 bg-green-300 dark:bg-gray-600"
                onClick={() => setTheme('light')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              </Button>
            </>
          )
        } else {
          return (
            <>
              <Button className=" bg-green-300" onClick={undefined}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </Button>
              <Button className="ml-2 bg-green-300"
                onClick={() => setTheme('dark')}
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </Button>
            </>
          )
        }
    
    }

    return (
        <nav className="font-semibold h-16 flex items-center justify-around bg-green-400 dark:bg-gray-800 text-white navbar navbar-expand-lg navbar-light">
            <ul className="flex gap-4">
                { navigations.map((nav, index) => (
                <Link 
                    key={index}
                    href={nav.path}
                >
                    <a className=" hover:text-white" >
                        {nav.label}
                    </a>
                </Link>)
                )}
            </ul>
            <span 
              className="flex"
            >
              {renderThemeChanger()}
            </span>
        </nav>
    )
}

export default Header;
