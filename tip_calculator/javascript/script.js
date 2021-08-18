let btnValue;

function inFunction(element) {
    btnValue = element.value;
    console.log(btnValue);
    return btnValue;
}

function tipCalc() {
    let bill = document.getElementById('bill').value;

    let people = document.getElementById('num_people').value;

    // This line gets the value from the inFunction.
    let button_value = btnValue;

    let a = parseFloat(bill * button_value);

    //console.log(a);

    let b = Math.round((a / people) * 100) / 100;
 
    //console.log(b);

    let c = Math.round(((bill / people) + b) * 100) / 100;

    //console.log(c);

    document.getElementById('no').innerHTML = '$' + b.toFixed(2);

    document.getElementById('yes').innerHTML = '$' + c.toFixed(2);
}

function reset() {
    location.reload();
}