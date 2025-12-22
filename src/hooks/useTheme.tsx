import { useEffect, useState } from "react"


type Theme = "light" | "dark";

export const useTheme = ()=>{

    const [theme, setTheme] = useState<Theme>(()=>{

        if(typeof window !== undefined){
            return (localStorage.getItem('theme') as Theme || 'light')
        }

        return 'light';
    })


    const toggleTheme = ():void =>{
        setTheme((prev)=> prev === 'dark' ? 'light' : 'dark')
    }


    const setDark = ()=>setTheme('dark')

    const setLight = ()=> setTheme('light');

    useEffect(()=>{
        const root = window.document.documentElement;

        if(theme === 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }


        localStorage.setItem('theme',theme)

    },[theme])


    return {
        theme,
        toggleTheme,
        setDark,
        setLight
    }
}