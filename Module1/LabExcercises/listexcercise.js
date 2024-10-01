let cars = ["Benz", "Jag", "BMW", "Lexus"];
console.log(cars[0]); // 'Benz'
console.log(cars[1]); // 'Jag'
console.log(cars[2]); // 'BMW'
console.log(cars[3]); // 'Lexus'

cars[1] = "Ford";
console.log(cars);

cars.push("Range Rover");
console.log(cars);

cars.unshift("Ford");
console.log(cars);

cars.pop("Lexus");
console.log(cars);

cars.shift("Lambo");
console.log(cars);
