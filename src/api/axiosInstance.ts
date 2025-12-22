import axios from "axios";

const image_URL:string = 'https://image.tmdb.org/t/p/w500';
const back_drop_image_URL:string = 'https://image.tmdb.org/t/p/original';

const axiosInstance = axios.create({

    baseURL:'https://api.themoviedb.org/3',
    params:{
        api_key:"ace517b3d7b7b8941594c90f3965d9a7"
    },
    headers:{
        Accept:'application/json'
    }
    
})


export {axiosInstance,image_URL,back_drop_image_URL}