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
      'background-color:#101119; color:white; border: 2px solid #e0e3ec;'
    );
    ball.setAttribute(
      'style',
      'transform:translatex(95%); background-color:#e0e3ec; border: 2px solid #e0e3ec;'
    );
    body.setAttribute('style', 'background-color:#101119; color:#e0e3ec;');
    body.style.transitionDuration = '1s';

    header.setAttribute('style', 'background-color:#101119;');
    header.style.transitionDuration = '1s';

    logo.setAttribute('style', 'color:#e0e3ec;');
    logo.style.transitionDuration = '1s';
  }

  //   conditions to apply when checkbox is unchecked
  if (this.checked == false) {
    box.setAttribute(
      'style',
      'background-color:#e0e3ec; border: 2px solid #52796f;'
    );
    ball.setAttribute(
      'style',
      'transform:translatex(-5%); background-color:#52796f; border: 2px solid #101119;'
    );
    body.setAttribute('style', 'background-color:#e0e3ec; color:#101119');
    body.style.transitionDuration = '1s';

    header.setAttribute('style', 'background-color:#e0e3ec;');
    header.style.transitionDuration = '1s';

    logo.setAttribute('style', 'color:#101119;');
    logo.style.transitionDuration = '1s';
  }
});
