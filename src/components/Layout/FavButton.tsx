import { Icon } from "@iconify/react"
import { useFavorites } from "../../hooks/useFavorites";

type props = {
    movieId:number
}

const FavButton: React.FC<props> = ({movieId})=>{

    const {isFavorite,toggleFavorite} = useFavorites();

    const favorite = isFavorite(movieId);

    return <>

    <button className="cursor-pointer flex items-center gap-3" onClick={()=>toggleFavorite(movieId)}>
        <Icon icon="mdi:cards-heart" width="24" height="24" className={favorite ? 'text-red-600' : 'text-winter'} />

        {favorite ?'Remove from favorite':'Add to favorite'}
    </button>

    </>
}


export default FavButton;