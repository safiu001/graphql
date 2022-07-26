import React from "react";

type Movie = {
  id: string;
  name: string;
  rating: string;
  category: string;
};

type Props = {
  data: Movie[];
};

const MoviesList = (props: Props) => {
  return (
    <div className="flex-container">
      {props.data.map((movie: Movie) => {
        return (
          <div className="item-container" key={movie.id}>
            <div>Name: {movie.name}</div>
            <div>Category: {movie.category}</div>
            <div>Rating: {movie.rating}</div>
          </div>
        );
      })}
    </div>
  );
};

export default MoviesList;
