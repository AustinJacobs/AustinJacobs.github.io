function tipCalc() {
    let bill = document.getElementById('bill').value;
    let val1 = document.getElementById('one').value;
    let val2 = document.getElementById('two').value;
    let val3 = document.getElementById('three').value;
    let val4 = document.getElementById('four').value;
    let val5 = document.getElementById('five').value;
    let val6 = document.getElementById('six').value;
    let people = document.getElementById('num_people').value;

    let bill_before = bill * val3;

    let bill_after = Math.floor(bill_before / people * 100) / 100;

    let total = (bill / people) + bill_after;

    document.getElementById('no').innerHTML = '$' + bill_after;

    document.getElementById('yes').innerHTML = '$' + total.toFixed(2);
}