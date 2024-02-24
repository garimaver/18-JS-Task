// Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.

// const numbers = [2, 9, 13, 15, 18, 20, 45];

// const sqrNumbers = numbers.map(num => num ** 2);
// console.log(sqrNumbers);



//Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..

// function calGrade(score){
//     return score >= 90 ? 'A' :
//           score >= 80 ? 'B' :
//            score >= 70 ? 'C' :
//          score >= 60 ? 'D' :
//          'F';
// }

// const stScore = 78;
// const stGrade = calGrade(stScore);
// console.log(`student grade is ${stGrade}`)

//Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.

// const car = {
//     companyName: 'Hyundai',
//     model: 'Creta',
//     year: 2018
// };

// function changeYear(carObj, newYear) {
//     carObj.year = newYear;
// }

// changeYear(car, 2018);


// const { model, year } = car;
// console.log(`Car Model ${model}`); 
// console.log(`Car Year ${year}`);  

//Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.
// function isPrime(number) {
//     if (number <= 1) return false;
//     if (number <= 3) return true;

//     if (number % 2 === 0 || number % 3 === 0) return false;

//     let i = 5;
//     while (i * i <= number) {
//         if (number % i === 0 || number % (i + 2) === 0) return false;
//         i += 6;
//     }

//     return true;
// }

// function filterPrimeNumbers(numbers) {
//     return numbers.filter(num => isPrime(num));
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const primeNumbers = filterPrimeNumbers(numbers);

// console.log(primeNumbers); 


//Q5 -  State different use cases of map, filter and reduce functions.

//  Map

//Transforming an array of numbers by doubling each number.
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers);

//Converting an array of objects to an array of specific property values.
// const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
// const userIds = users.map(user => user.id);
// console.log(userIds); 

//Filter

//Filtering out even numbers from an array.
// const numbers = [1, 2, 3, 4, 5];
// const oddNumbers = numbers.filter(num => num % 2 !== 0);
// console.log(oddNumbers);

//Filtering users based on certain criteria
// const users = [{ id: 1, name: 'garima', age: 22 }, { id: 2, name: 'abhinav', age: 24 }];
// const adults = users.filter(user => user.age >= 18);
// console.log(adults); 


//Reduce

//Calculating the sum of all numbers in an array.
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); 


//Concatenating all strings in an array.
// const words = ['Hello', ' ', 'world', '!'];
// const sentence = words.reduce((acc, curr) => acc + curr, '');
// console.log(sentence); 


//Q6 - Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.
// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/7');
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         console.log( data);
//     } catch (error) {
//         console.error('Error', error.message);
//     }
// }


// fetchData();

//Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.
const person = {
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA',
    }
    // 'contact' property is missing
};

const phoneNumber = person?.contact?.phone;
console.log('Phone Number', phoneNumber); 
