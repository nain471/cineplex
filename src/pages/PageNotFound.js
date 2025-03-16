import { Link } from "react-router-dom"
import pagenotfound from "../assets/images/pagenotfound.png"
export const PageNotFound = () => {
  return (
    <main>
      <section className="flex justify-center flex-col items-center">
        <div className="flex justify-center flex-col text-center max-w-lg text-5xl font-bold">
          <p className="py-5 dark:text-slate-300">404, Oops!</p>
          <img src={pagenotfound} alt="404 page not found" />
        </div>
        <div>
          <Link to="/">
          <button className="bg-blue-700 rounded mt-4 py-2 px-8 text-slate-100 text-lg font-bold">Back To Cinemate</button>
          </Link>
        </div>
      </section>

    </main>
  )
}


