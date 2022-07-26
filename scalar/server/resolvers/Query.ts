import { db } from "../db"

export const Query = {
    movies: ()=> {
        const { Movies } = db
        return Movies
    },
    movie: (parent: any, args: {id: string}, context: any)=>{
        const id = args.id
        const { Movies } = db
        return Movies.find((movie)=>movie.id===id)
    }
}