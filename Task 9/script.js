/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */
class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
 wasExpensive() {
    return Boolean(this.budget > 100000000);
}
}
let firstMovie = new Movie("Miškas", "Jonas", 99999999);
let secondMovie = new Movie("Rojus", "Petras", 100000001);
console.log(firstMovie.wasExpensive());
console.log(secondMovie.wasExpensive());