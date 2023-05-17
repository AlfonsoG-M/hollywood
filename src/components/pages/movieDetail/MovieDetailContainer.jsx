import { useParams } from 'react-router-dom'
import MovieDetail from './MovieDetail'
import { useEffect, useState } from 'react'
import { getProductById } from '../../../services/services'

const MovieDetailContainer = () => {
    const { id }= useParams()
    const [movieInfo, setMovieInfo] = useState(null)
    useEffect(()=>{
        getProductById(id).then((res)=>setMovieInfo(res.data)).catch((error)=>console.log(error))
    }, [id])

    console.log(movieInfo);
  return (
    <div>
        {
            movieInfo && <MovieDetail movieInfo={movieInfo}/>
        }
    </div>
  )
}

export default MovieDetailContainer