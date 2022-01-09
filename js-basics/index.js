// Speed Limit is 70 MPH
// 5 => 1 Point
// Math.floor(1.3) => 1
// More than 12 points => license suspended

checkSpeed(130)

function checkSpeed(speed) {
    const speedLimit = 70;
    const milePerPoint = 5;

    if (speed < speedLimit + milePerPoint) {
        console.log('OK')
    }

    else {
        const points = Math.floor((speed - speedLimit) / milePerPoint);
        if (points >= 12) {
            console.log('License Suspended')
        } else {
            console.log('Points: ', points)
        }
    }
}