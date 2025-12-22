import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type { SingleMovieInterface } from "../interfaces/MovieIntrerface";
import { axiosInstance, back_drop_image_URL, image_URL } from "../api/axiosInstance";
import LoadingLayout from "../components/Layout/LoadingLayout";
import { Icon } from "@iconify/react";

function ViewMovie() {
    const { id } = useParams();
    const [loading, setLoading] = useState<boolean>(false);
    const [movie, setMovie] = useState<SingleMovieInterface | null>(null);

    const fetchMovie = async () => {
        try {
            setLoading(true);

            const { data } = await axiosInstance.get(`/movie/${id}`);

            setMovie(data)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchMovie()
    },[]);

    if (loading) {

        return (
            <div className="min-h-screen p-6">

                <LoadingLayout />

            </div>
        )

    }

    if (!movie) {

        return (<div className="min-h-screen p-6">

            <div className="text-center p-6">
                Movie is Not Found
            </div>

        </div>

        )

    }


    return (

        <div className="min-h-screen p-6 text-winter relative">
            {movie.backdrop_path && <div style={{ backgroundImage: `url(${back_drop_image_URL}${movie.backdrop_path})` }} className="h-[60vh] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-black/70"></div>
            </div>}

            <div className="max-w-5xl mx-auto px-6 absolute top-1/4 left-1/4 -translate-1/2 z-10">

                <div className="flex flex-col md:flex-row gap-6">


                    {movie.poster_path && (<img className="w-64 rounded-2xl shadow-lg" src={`${image_URL}${movie.poster_path}`} alt={movie.title} />)}

                    <div>

                        <h1 className="text-4xl font-bold mb-3">
                            {movie.title}
                        </h1>

                        <div>
                            <span className="flex items-center justify-start my-3 text-amber-400">
                                <Icon icon={"mdi:star"} className="text-2xl" /> {movie.vote_average}
                            </span>

                            <span>
                                {movie.release_date}
                            </span>

                        </div>

                        <p className="text-gray-200 max-w-xl leading-relaxed">
                            {movie.overview}
                        </p>

                    </div>

                </div>


            </div>

            {/* comments */}
        </div>
    )
}

export default ViewMovie
