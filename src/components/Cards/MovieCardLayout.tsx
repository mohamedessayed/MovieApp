import { Icon } from "@iconify/react"
import type { MovieInterface } from "../../interfaces/MovieIntrerface"
import { Link } from "react-router"
import { image_URL } from "../../api/axiosInstance"


const MoviCardLayout: React.FC<MovieInterface> = ({id,title,poster_path,vote_average})=>{
    return <>

    <div className="bg-winter/50 pb-6 rounded-2xl shadow">

        <Link to={`view/movie/${id}`}>
        {poster_path ? (<img className="h-72 w-full object-cover" src={`${image_URL}${poster_path}`} alt={title} />) : (<div className="h-72 flex justify-center items-center text-gray-500">
            <Icon icon={'mdi:image-off'}  className="text-4xl"/>
            </div>)}
        </Link>

            <div className="p-3">

                <h3 className="font-semibold text-sm truncate">
                    {title}
                </h3>
                <p className="flex items-center justify-start my-3 text-amber-400">
                    <Icon icon={"mdi:star"} className="text-2xl"/> {vote_average}
                </p>

            </div>

            <div className="p-3">
                <Link className="px-6 py-3 rounded-2xl bg-brown text-winter cursor-pointer" to={`view/movie/${id}`}>Show Movie</Link>
            </div>

    </div>
    
    
    </>
}

export default MoviCardLayout