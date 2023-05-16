import { useParams } from 'react-router-dom'
import MovieDetail from './MovieDetail'
import { useEffect, useState } from 'react'
import { getProductById } from '../../../services/services'

const MovieDetailContainer = () => {
    const { id }= useParams()
    const [movieInfo, setMovieInfo] = useState({})
    useEffect(()=>{
        getProductById(id).then((res)=>setMovieInfo(res.data)).catch((error)=>console.log(error))
    }, [id])

    
    
    console.log(movieInfo);
    console.log(movieInfo.images.Poster);
  return (
    <div><MovieDetail movieInfo={movieInfo}/></div>
  )
}

export default MovieDetailContainer