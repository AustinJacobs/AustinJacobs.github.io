// IF ELSE

let hour = 20;

if (hour >= 6 && hour < 12) {
    console.log("Good Morning");
} else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon!');
} else {
    console.log('Good evening!');
}

// SWITCH

let role = 'moderator';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break

    default:
        console.log("Unknown User");
}

// FOR

for (let i = 1; i <= 5; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

// WHILE

let i = 1;
while (i <= 5) {
    if (i % 2 !== 0) {
        console.log(i)
    }
    i++
}

