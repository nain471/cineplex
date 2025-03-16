import { useState,useEffect } from 'react'

export const useFetch = (apiPath,queryTerm="") => {
    const [data,setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`
    
    useEffect(() => {
        const movieUrl  = async ()=>{
          try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data.results)
            console.log(data.results)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        } 
        movieUrl() ;   
      }, [url])
  return {data}
}


