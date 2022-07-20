import Link from "next/link";
import Button from "@/components/Button";
import HeaderButtons from "@/components/Header/HeaderButtons";

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
            <HeaderButtons className={"bg-green-300 dark:bg-gray-600"} onClick={() => setTheme('light')}/>
          )
        } else {
          return (
            <HeaderButtons className={"bg-green-300"} onClick={() => setTheme('dark')}/>
          )
        }
    
    }

    return (
        <nav className="fixed w-full z-50 font-semibold h-16 flex items-center justify-around bg-green-400 dark:bg-gray-800 text-white navbar navbar-expand-lg navbar-light">
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
