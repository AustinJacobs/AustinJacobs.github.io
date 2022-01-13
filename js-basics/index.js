// Speed Limit is 70 MPH
// 5 => 1 Point
// Math.floor(1.3) => 1
// More than 12 points => license suspended

// checkSpeed(130)

// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const milePerPoint = 5;

//     if (speed < speedLimit + milePerPoint) {
//         console.log('OK')
//     }

//     else {
//         const points = Math.floor((speed - speedLimit) / milePerPoint);
//         if (points >= 12) {
//             console.log('License Suspended')
//         } else {
//             console.log('Points: ', points)
//         }
//     }
// }

// showNumbers(10)

// function showNumbers(limit) {
//     for (let i = 0; i <= limit; i++) {
//         if (i % 2 === 0) {
//             console.log(i, "EVEN")
//         } else {
//             console.log(i, "ODD")
//         }
//     }
// }

// const array = [0, 1, 2, null, NaN, undefined, 7, "Me"]
// console.log(countTruthy(array))

// function countTruthy(array) {
//     let count = 0;
//     for (let value of array) {
//         if (value) {
//             count++;
//         }
//     }
//     return count;
// }

// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// }

// showProperties(movie)

// function showProperties(obj) {
//     for (let property in obj) {
//         if (typeof obj[property] === 'string')
//             console.log(property, obj[property])
//     }
// }

// console.log(sum(10))

// // Multiples of 3: 3, 6, 9
// // Multiples of 5: 5, 10

// function sum(limit) {
//     let sum = 0;
//     for (let i = 0; i <= limit; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             sum += i;
//         }
//     }

//     return sum;
// }

// const marks = [80, 80, 50];

// // 0-59: F
// // 60-69: D
// // 70-79: C
// // 80-89: B
// // 90-100: A

// console.log(calculateGrade(marks))

// function calculateGrade(marks) {
//     let total = 0;
//     for (let mark of marks) {
//         total += mark
//     }

//     let average = total / marks.length;

//     if (average >= 0 && average <= 59) {
//         return "F"
//     }

//     if (average >= 60 && average <= 69) {
//         return "D"
//     }

//     if (average >= 70 && average <= 79) {
//         return "C"
//     }

//     if (average >= 80 && average <= 89) {
//         return "B"
//     }

//     if (average >= 90 && average <= 100) {
//         return "A"
//     }
// }

// showStars(5);

// function showStars(rows) {
//     for (let row = 1; row <= rows; row++) {
//         let pattern = '';
//         for (let i = 0; i < row; i++) {
//             pattern += '*';
//         }
//         console.log(pattern)
//     }
// }

// showPrimes(37);

// function showPrimes(limit) {
//     for (let number = 2; number <= limit; number++) {
//         if (isPrime(number)) console.log(number + ' Prime');
//     }
// }

// function isPrime(number) {
//     for (let factor = 2; factor < number; factor++) {
//         if (number % factor === 0) {
//             return false;
//         }
//     }
//     return true;
// }