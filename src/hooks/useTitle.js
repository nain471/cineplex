import  { useEffect } from 'react'

const useTitle = (title) => {
    useEffect(() => {
      document.title =`${title}-Cineplex`
       
    })
    
  return null
}

export default useTitle
