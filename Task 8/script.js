/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(_x, _y){
    this.x = _x;
    this.y = _y;
  }
    Calculator.prototype.sum = function() {
        return this.x+this.y;
      };
    Calculator.prototype.subtraction = function() {
        return this.x-this.y;
      };
    Calculator.prototype.multiplication = function() {
        return this.x*this.y;
      };
    Calculator.prototype.division = function() {
        return this.x/this.y;
};

let skaiciuotuvas = new Calculator(6.1, 2);

console.log(skaiciuotuvas.sum());
console.log(skaiciuotuvas.subtraction());
console.log(skaiciuotuvas.multiplication());
console.log(skaiciuotuvas.division());