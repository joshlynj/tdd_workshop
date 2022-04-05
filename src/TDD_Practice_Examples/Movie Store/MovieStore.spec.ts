import { Movie } from "./Movie";
import { addMovie, checkStock, calculateCost } from "./MovieStore";

describe("add movies to inventory", () => {
  it("add a movie to an inventory", () => {
    expect(addMovie(new Movie("Up") )).toContainEqual(new Movie("Up"));
  });
});

describe("movie is in stock", () => {
  it("check if movie is in stock", () => {
    expect(checkStock("Up")).toBe(true);
  });
});

describe("calculate total cost", () => {
  it("check customer's total cost", () => {
    expect(calculateCost("Up")).toBe(2);
  });
});
