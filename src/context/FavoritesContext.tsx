import { createContext, useEffect, useState } from "react";

type ProviderProps = {
    children:React.ReactNode
}

type ProviderContextType = {
    favorites:number[],
    isFavorite : (movieID:number) => boolean,
    toggleFavorite: (MovieID:number) => void
}

const FavoritesContext = createContext<undefined| ProviderContextType>(undefined);


const FavoritesContextProvider:React.FC<ProviderProps> = ({children})=>{
    const [favorites,setFavorites] = useState<number[]>(() => {
        if(typeof window !== undefined){
            const x:string|null = localStorage.getItem('stored');
            return ( x ? JSON.parse(x):[])
        }

        return [];
    });
    
    useEffect(()=>{
        const stored = localStorage.getItem('stored');
        
        if (stored) {
            setFavorites(JSON.parse(stored));
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('stored',JSON.stringify(favorites));
    },[favorites])


    const toggleFavorite = (movieId:number)=>{
        setFavorites( prev => prev.includes(movieId) ? prev.filter(id => id !== movieId) : [...prev,movieId] );
    }

    const isFavorite = (movieId:number)=> favorites.includes(movieId);

    

    return <FavoritesContext.Provider value={ {favorites,isFavorite,toggleFavorite} }>
        {children}
    </FavoritesContext.Provider>
}


export {FavoritesContext,FavoritesContextProvider}


