const {v4: uuid} = require("uuid")
type AddMovie = {
    name: string,
    rating?: string,
    category?: string
}

export const Mutations = {
    addMovie: (parent:any, args: {input: AddMovie}, { db }: {db: any})=>{
        const movies = db.Movies
        const movieInfo = args.input
        const newMovie = {
            id: uuid(),
            ...movieInfo
        }

        movies.push(newMovie)

        return newMovie
    }
}