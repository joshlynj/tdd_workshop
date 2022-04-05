// A movie store is asking you to make an application
// the application can add movies to an inventory DB,
// track if a movie is rented out or in stock,
// calculate a customer's total cost for the # of rentals * # of days.
// A customer can only rent a movie if it is in stock.
import {Movie} from "./Movie"

let movies: Movie[]


export function addMovie(movie: Movie) {
  console.log('movieTitle', movie)
  if (movies === undefined) {
    movies = [new Movie(movie.name)]
  } else{
  movies.push(movie);
  }

  return movies;

}

export function checkStock(movie){
  let searchedMovie = movies.find(m => m.name === movie) 
  return searchedMovie.inStock; 
}

export function calculateCost(movie){
  let searchedMovie = movies.find(m => m.name === movie) 
  let price = searchedMovie.numDaysRented 
}