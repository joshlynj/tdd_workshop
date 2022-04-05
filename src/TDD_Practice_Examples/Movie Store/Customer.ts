
import { Movie } from "./Movie";

export class Customer{
    name: string ;
    movieRentals: Movie[];


constructor(name: string, rentals: Movie[]){
    this.name = name;
    this.movieRentals = rentals;
}

totalCost = (): number => {
    
    let total: number = 0;
    for(let i=0; i<this.movieRentals.length; i++) {
        total = total + this.movieRentals[i].numDaysRented;
    }

    return total;
 }
}