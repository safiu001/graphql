import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import "./App.css";
import AddMovieButton from "./components/AddMovieButton";
import MoviesList from "./components/MoviesList";

const GET_MOVIES = gql`
  query {
    movies {
      name
      category
      rating
    }
  }
`;

function App() {
  const { error, data, loading } = useQuery(GET_MOVIES);
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [rating, setRating] = useState<string>("");

  if (error) return <div>error</div>;
  if (loading) return <div>loading.........</div>;

  return (
    <div className="App">
      <form action="#" className="add-movie-form">
        <label htmlFor="name">Name of the Movie: </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          onChange={(event) => setName(event.target.value)}
        />
        <br />

        <label htmlFor="rating">Rating of the Movie: </label>
        <input
          required
          type="text"
          name="rating"
          id="rating"
          onChange={(event) => setRating(event.target.value)}
        />
        <br />

        <label htmlFor="category">Category of the Movie: </label>
        <input
          required
          type="text"
          name="category"
          id="category"
          onChange={(event) => setCategory(event.target.value)}
        />
        <br />

        <AddMovieButton movie={{ name, category, rating }} />
      </form>
      <MoviesList data={data.movies} />
    </div>
  );
}

export default App;
