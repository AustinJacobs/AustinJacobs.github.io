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

checkSpeed(130);

function checkSpeed(speed) {
    const speedLimit = 70;
    const mphPoint = 5;

    if (speed <= speedLimit + mphPoint) {
        console.log('OK')
    } else {
        let points = Math.floor((speed - speedLimit) / mphPoint);
        if (points >= 12) {
            console.log("License Suspended");
        }
        else {
            console.log('Points', points)
        }
    }
}