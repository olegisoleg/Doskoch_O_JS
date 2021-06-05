// Метод join
var cars = ["Subaru", "Volovo", "BMW", "Porsche", "Nissan"];
console.log(cars);
var changedArray = cars.join(", ");
console.log(changedArray);

// Метод Concat
var cars = ["Subaru", "Volovo", "BMW", "Porsche", "Nissan"];
console.log(cars);
cars = cars.concat("Fiat", "McLaren", "TVR");
console.log(cars);

// Метод Reverse
var cars = ["Subaru", "Volovo", "BMW", "Porsche", "Fiat", "McLaren", "TVR", "Nissan"];
console.log(cars);
cars = cars.reverse();
console.log(cars);

// Метод Slice
var cars = ["Subaru", "Volovo", "BMW", "Porsche", "Fiat", "McLaren", "TVR", "Nissan"];
console.log(cars);
var changedArray = cars.slice(0, -4);
console.log(changedArray);
var changedArray = cars.slice(0, 3);
console.log(changedArray);

// Метод Splice
var cars = ["Subaru", "Volovo", "BMW", "Porsche", "Fiat", "McLaren", "TVR", "Nissan"];
console.log(cars);
var del = cars.splice(2, 4);
console.log(cars);
cars.splice(1, 0, "Ferrari", "Shelby", "Toyota", "Honda");
console.log(cars);

// Метод Sort
var cars = ["Subaru", "Volovo", "BMW", "Porsche", "Fiat", "McLaren", "TVR", "Nissan"];
console.log(cars);
cars.sort();
console.log(cars);

// Метод Push
var cars = ["Subaru", "Volovo", "BMW", "Porsche", "Fiat", "McLaren", "TVR", "Nissan"];
console.log(cars);
cars.push("Bentley", "Aston Martin");
console.log(cars);

// Метод Pop
var cars = ["Subaru", "Volovo", "BMW", "Porsche", "Fiat", "McLaren", "TVR", "Nissan"];
console.log(cars);
cars.pop();
console.log(cars)

// Метод Unshift
var cars = ["Subaru", "Volovo", "BMW", "Porsche", "Fiat", "McLaren", "TVR", "Nissan"];
console.log(cars);
cars.unshift("Seat", "Mitsubishi");
console.log(cars)

// Метод Shift
var cars = ["Subaru", "Volovo", "BMW", "Porsche", "Fiat", "McLaren", "TVR", "Nissan"];
console.log(cars);
cars.shift();
console.log(cars);