import React, { useEffect, useState } from "react"
import type { MovieInterface } from "../interfaces/MovieIntrerface";
import { axiosInstance } from "../api/axiosInstance";
import LoadingLayout from "../components/Layout/LoadingLayout";
import {Icon} from "@iconify/react"
import MoviCardLayout from "../components/Cards/MovieCardLayout";
const Movie :React.FC = ()=>{

    const [movies,setMovies] = useState<MovieInterface[]>([]);
    const [loading,setLoading] = useState<boolean>(false);

    const prefetchMovieApiData = async ()=>{

        try{

            setLoading(true);
            const {data} = await axiosInstance.get('/movie/popular');
            setMovies(data.results || [])

        } catch(error){

            console.log(error);
            

        }  finally {
            setLoading(false)
        }

    }


    useEffect(()=>{

        prefetchMovieApiData();

    },[]);

    return <>

    <div className="min-h-screen p-6">
        <h1 className="font-bold text-3xl mb-6 flex items-center gap-2 text-primary_dark dark:text-winter">
            <Icon icon="mdi:movie-open" width="24" height="24" />
            Movie Expolorer
        </h1>

    {loading&&<LoadingLayout />}

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

        {movies&&movies.map((movie)=><MoviCardLayout {...movie} key={movie.id} />)}

    </div>

    </div>

    
    </>
}


export default Movie;