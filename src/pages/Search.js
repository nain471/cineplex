import { Card } from "../components"
import { useFetch } from "../hooks/useFetch"
import { useSearchParams } from "react-router-dom"

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const {data:movies} = useFetch(apiPath,queryTerm);
  
  return (
    <main>
        <section className="pt-7">
          <p className="text-3xl text-gray-700 dark:text-white">{movies.length===0?`No Result found for '${queryTerm}'`:`Result found for '${queryTerm}'`}</p>
        </section>
        <section className="py-7 ">
          <div className="flex flex-wrap"> 
          {movies.map(movie=><Card key ={movie.id} movie={movie}/>)}

          </div>
        </section>
    </main>
  )
}


