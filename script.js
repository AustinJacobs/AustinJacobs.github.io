// let date = new Date();
// let year = date.getFullYear();

// document.getElementById('update').innerHTML = year;

// let x = document.lastModified;

// Code for toggling the light and dark mode.

// Selecting all the required classes from HTML to change
let body = document.body;
let check = document.querySelector('#check');
let box = document.querySelector('.box');
let ball = document.querySelector('.ball');
let changeColor = document.querySelectorAll('.change');

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
      'background-color:#e0e3ec; border: 2px solid #101119;'
    );
    ball.setAttribute(
      'style',
      'transform:translatex(95%); background-color:#6ab99f; border: 2px solid #101119;'
    );
    body.setAttribute('style', 'background-color:#e0e3ec; color:#101119');
  }

  //   conditions to apply when checkbox is unchecked

  if (this.checked == false) {
    box.setAttribute(
      'style',
      'background-color:#101119; color:white; border: 2px solid #e0e3ec;'
    );
    ball.setAttribute(
      'style',
      'transform:translatex(-5%); background-color:#bd6abb; border: 2px solid #e0e3ec;'
    );
    body.setAttribute('style', 'background-color:#101119; color:#e0e3ec;');
  }
});
