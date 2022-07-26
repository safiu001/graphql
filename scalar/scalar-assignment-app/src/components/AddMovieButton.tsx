import { gql, useMutation } from "@apollo/client";
import React from "react";
import { MovieModel } from "../model/MovieModel";

type Props = {
  movie: MovieModel;
};

const ADD_MOVIE = gql`
  mutation AddMovie($name: String!, $rating: String, $category: String) {
    addMovie(input: { name: $name, rating: $rating, category: $category }) {
      id
      name
      category
      rating
    }
  }
`;

const AddMovieButton = (props: Props) => {
  const [addNewMovie, { error, loading, data }] = useMutation(ADD_MOVIE, {
    variables: {
      name: props.movie.name,
      rating: props.movie.rating,
      category: props.movie.category,
    },
  });

  console.log(props.movie);
  return (
    <button className="add-button" onClick={() => addNewMovie()}>
      Add Movie
    </button>
  );
};

export default AddMovieButton;
