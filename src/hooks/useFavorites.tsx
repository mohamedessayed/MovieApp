import { useContext } from "react"
import { FavoritesContext } from "../context/FavoritesContext"

const useFavorites = ()=>{
    const context = useContext(FavoritesContext);

    if (!context) {
        throw new Error ("useFavorite must be used with provider")
    }

    return context;
}


export {useFavorites}