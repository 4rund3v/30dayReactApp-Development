import { getMusicGenres } from "./musicGenreService";

const genres = [
  {
    _id: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    genre: "Animated",
  },
  {
    _id: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    genre: "Thriller",
  },
  {
    _id: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    genre: "Adventure",
  },
  {
    _id: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    genre: "Romantic",
  },
  {
    _id: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    genre: "Story",
  },
  {
    _id: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    genre: "Comedy",
  },
  {
    _id: "f65efc36-1b4c-11eb-9299-f07959967e21",
    genre: "Action",
  },
];

const allGenres = [...genres, ...getMusicGenres()];

export function getGenreNameById(genreId) {
  for (let i = 0; i < allGenres.length; i++) {
    if (allGenres[i]._id === genreId) {
      return allGenres[i].genre;
    }
  }
}

export function getGenres() {
  return genres.filter((g) => g);
}
