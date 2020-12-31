function toggleRightMenu() {
    navMenuStatus = document.getElementById('rightMenu').style.display;
    if ( navMenuStatus == 'none' ) {
      document.getElementById('rightMenu').style.display = 'block';
    } else {
      document.getElementById('rightMenu').style.display = 'none';
    }
  }