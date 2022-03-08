// // Exercise #1

// let number = maxOfTWo(45, 55);

// console.log(number);

// function maxOfTWo(num1, num2) {
//     if (num1 > num2) return num1;
//     return num2;
// }

// // Exercise #2

// function isLandscape(width, height) {
//    return (width > height);
// }

// console.log(isLandscape(45, 30));

// Exercise #3

// const output = fizzBuzz(8);
// console.log(output);

// function fizzBuzz(input) {
//     if (typeof input !== 'number')
//         return NaN;
//     if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
//     if (input % 3 === 0) return "Fizz";
//     if (input % 5 === 0) return "Buzz";
//     return input;

// }

// checkSpeed(130);

// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const mphPoint = 5;

//     if (speed <= speedLimit + mphPoint) {
//         console.log('OK')
//     } else {
//         let points = Math.floor((speed - speedLimit) / mphPoint);
//         if (points >= 12) {
//             console.log("License Suspended");
//         }
//         else {
//             console.log('Points', points)
//         }
//     }
// }

// const numbers = [1, 2, 3, 1, 4];

// // End
// numbers.push(5, 6)

// // Beginning
// numbers.unshift(1, 2);

// // Middle
// numbers.splice(2, 0, 'a', 'b');

// console.log(numbers)

// console.log(numbers.indexOf('a'));

// console.log(numbers.lastIndexOf(1));

// console.log(numbers.indexOf(1) !== -1);
// console.log(numbers.includes(1));

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// // push
// numbers.push(7);
// console.log(numbers);
// // pop
// numbers.pop()
// console.log(numbers);

// //unshift
// numbers.unshift(0);
// console.log(numbers);
// // shift
// numbers.shift();
// console.log(numbers);

// //splice
// numbers.splice(2, 1);
// console.log(numbers);

// numbers.splice(2, 0, 3);
// console.log(numbers);

// //map
// let addTwo = numbers.map((number) => {
//     return number + 2;
// });

// console.log(addTwo);

// // filter
// let filteredEvens = numbers.filter((number) => {
//     return number > 3;
// });

// console.log(filteredEvens);

// //forEach
// let addedWords = numbers.forEach((number) => {
//     console.log(number + 2);
// });

// console.log(addedWords);

// //for
// for (i = 0; i < numbers.length; i++) {
//     console.log(numbers);
// }

showNumbers(10);

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const message = i % 2 === 0 ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}
