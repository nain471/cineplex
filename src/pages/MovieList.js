
import { Card } from "../components"
import { useFetch } from "../hooks/useFetch"
import useTitle from "../hooks/useTitle"



export const MovieList = ({apiPath,title}) => {
  const {data:movies} = useFetch(apiPath)
  useTitle(title) 
  
 
 
   
  
 
  return (
    <main>
        <section className="py-7 ">
          <div className="flex flex-wrap"> 
          {movies.map(movie=><Card key ={movie.id} movie={movie}/>)}

          </div>
        </section>
    </main>
  )
}


