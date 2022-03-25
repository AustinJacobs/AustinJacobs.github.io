// Import all plugins
import * as bootstrap from 'bootstrap';

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
let header = document.querySelector('.header');
let logo = document.querySelector('.logo-content');
let hamburger = document.querySelector('.menu-bars');
let blurred = document.querySelectorAll('.blur');
let drawer = document.querySelector('.drawer-list');
let drawerUl = document.querySelector('.drawer-ul');

check.addEventListener('change', function () {
  //   conditions to apply when checkbox is checked

  if (this.checked == true) {
    box.setAttribute(
      'style',
      'background-color:#000000; color:white; border: 2px solid #FFFFFF;'
    );
    ball.setAttribute(
      'style',
      'transform:translatex(95%); background-color:#FFFFFF; border: 2px solid #FFFFFF;'
    );
    body.setAttribute('style', 'background-color:#000000; color:#FFFFFF;');
    body.style.transitionDuration = '1s';

    header.setAttribute('style', 'background-color:#000000;');
    header.style.transitionDuration = '1s';

    logo.setAttribute('style', 'color:#FFFFFF;');
    logo.style.transitionDuration = '1s';
  }

  //   conditions to apply when checkbox is unchecked
  if (this.checked == false) {
    box.setAttribute(
      'style',
      'background-color:#000000; color:white; border: 2px solid #FFFFFF;'
    );
    ball.setAttribute(
      'style',
      'transform:translatex(-10%); background-color:#FFFFFF; border: 2px solid #FFFFFF;'
    );
    body.setAttribute('style', 'background-color:#FFFFFF; color:#000000');
    body.style.transitionDuration = '1s';

    header.setAttribute('style', 'background-color:#FFFFFF;');
    header.style.transitionDuration = '1s';

    logo.setAttribute('style', 'color:#000000;');
    logo.style.transitionDuration = '1s';
  }
});
