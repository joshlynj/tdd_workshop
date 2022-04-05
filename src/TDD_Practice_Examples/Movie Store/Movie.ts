export class Movie {
    inStock: boolean = true;
    numDaysRented: number = 1;
    name: string = "";

  constructor(name: string){
      this.name = name;
  }
}