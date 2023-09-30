// Q1 --------

console.log("Question 1:\n")
for(let i = 2; i <= 10; i+=2){
    console.log(i);
}

// Q2 --------

console.log("\n\nQuestion 2:\n")
for(let i = 5; i >= 1; i--){
    console.log(i);
}


// Q3 -------

console.log("\n\nQuestion 3:");
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for(const num of numbers) {
    sum += num;
}
console.log("Sum: " + sum);


// Q4 --------
console.log("\n\nQuestion 4: \n");
const student = {name: 'John', age: 20, grade: 'A'};
for(const key in student){
    console.log(`${key}: ${student[key]}`)
}

// Q5 --------
console.log("\n\nQuestion 5:\n");
const book = { title: 'Harry Potter', author: 'J.K. Rowling', year: 1997 };
for(const key in book){
    console.log(`${key}: ${book[key]}`);
}


// Q6 --------
console.log("\n\nQuestion 6:\n");
const colors = ['red', 'green', 'blue', 'yellow'];
for(const color of colors){
    console.log(color);
}


// Q7 ---------
console.log("\n\nQuestion 7:\n");
const numbers1 = [1, 2, 3, 4, 5];
let s = 0;
for(const num of numbers1) {
    s += num;
}
console.log("Sum: " + s);


// Q8 --------
console.log("\n\nQuestion 8:\n");
const temperatures = [32, 68, 75, 82, 56];
temperatures.forEach(function(temp, index, array) {
    array[index] = (temp - 32) * 5/9;
});
console.log("Temperatures in Celcius: " + temperatures);


// Q9 --------
console.log("\n\nQuestion 9:\n");
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
const populations = { 'New York': 8398748, 'Los Angeles': 3990456, 'Chicago': 2705994, 'Houston': 2320268 };
cities.forEach(function(city) {
    console.log(city + ": " + populations[city]);
});

// Q10 --------
console.log("\n\nQuestion 10:\n");
for(let i = 1; i <= 5; i++){
    let s = "";
    for(let j = 1; j <= i; j++){
        s += "*";
    }
    console.log(s);
}