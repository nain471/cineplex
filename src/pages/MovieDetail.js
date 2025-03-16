import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import Backup from "../assets/images/backup.png"
import useTitle from "../hooks/useTitle";
export const MovieDetail = () => {
  const useparams =useParams();
  const [movie,setmovie] =useState({});
  const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : Backup ;
  useEffect(() => {
    
    const movieDetailUrl =  async() => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${useparams.id}?api_key=${process.env.REACT_APP_API_KEY}`)
      const data=await response.json();
      setmovie(data)
      console.log(data)
    } 
    movieDetailUrl();
    
    
    
  },[useparams.id])
  
  useTitle(movie.title)
 
  
  console.log(useparams);
  return (
    <main>
        <section className="flex justify-around flex-wrap py-5 text-grey-700 dark:text-slate-100">
          <div className="max-w-sm">
            <img className="rounded" src={image} alt="Movie Poster" />
          </div>
          <div className="max-w-2xl mx-3">
            <h1 className="text-4xl font-bold my-3 text-center lg:text-left">{movie.original_title}</h1>
            <p className="text-lg my-4">{movie.overview}</p>
            {movie.genres?
            <p className="flex flex-wrap">
              {movie.genres.map(genre=>(<span className="border border-slate-500 py-2 px-4 rounded mr-3" key={genre.id}>{genre.name}</span>))} 
            </p>
            :""
            }
            <p className="my-3" ><span className="font-bold text-lg">Runtime: </span>{movie.runtime}min.</p>
            <p className="my-3" ><span className="font-bold text-lg">Budget: </span>{movie.budget}</p>
            <p className="my-3" ><span className="font-bold text-lg">Revenue: </span>{movie.revenue}</p>
            <p className="my-3" ><span className="font-bold text-lg">Release Date: </span>{movie.release_date}</p>
            <p className="my-3" ><span className="font-bold text-lg">IMBD Code: </span>{movie.imdb_id}</p>
          </div>

        </section>
    </main>
  )
}


