// let date = new Date();
// let year = date.getFullYear();

// document.getElementById('date').innerHTML = year;

// let x = document.lastModified;

// document.getElementById('update').innerHTML = x;

// Code for toggling the light and dark mode.

// Selecting all the required classes from HTML to change
var body = document.body;
var check = document.querySelector('#check');
var box = document.querySelector('.box');
var ball = document.querySelector('.ball');

// Targeting my social media links********************
// var youtube = document.querySelector('.youtube');
// var instagram = document.querySelector('.instagram');
// // *******************************

// Adding an eventListener function to change color everytime var check is changed.(checked & unchecked)

check.addEventListener('change', function () {
  //   conditions to apply when checkbox is checked

  if (this.checked == true) {
    box.setAttribute(
      'style',
      'background-color:#e0e3ec; border: 3px solid #101119;'
    );
    ball.setAttribute(
      'style',
      'transform:translatex(95%); background-color:#6ab99f; border: 3px solid #101119;'
    );
    body.setAttribute('style', 'background-color:#e0e3ec; color:#101119');

    // Targeting my social media links********************
    // youtube.setAttribute('style', 'border:2px solid white;');
    // instagram.setAttribute('style', 'border:2px solid white;');
    // // *******************************
  }

  //   conditions to apply when checkbox is unchecked

  if (this.checked == false) {
    box.setAttribute(
      'style',
      'background-color:#101119; color:white; border: 3px solid #e0e3ec;'
    );
    ball.setAttribute(
      'style',
      'transform:translatex(-5%); background-color:#bd6abb; border: 3px solid #e0e3ec;'
    );
    body.setAttribute('style', 'background-color:#101119; color:#e0e3ec;');

    // Targeting my social media links********************
    // youtube.setAttribute('style', 'border:2px solid black; color:black;');
    // instagram.setAttribute('style', 'border:2px solid black;');
    // // *******************************
  }
});
