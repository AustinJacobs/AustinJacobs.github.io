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

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
}

showProperties(movie)

function showProperties(obj) {
    for (let property in obj) {
        if (typeof obj[property] === 'string')
            console.log(property, obj[property])
    }
}