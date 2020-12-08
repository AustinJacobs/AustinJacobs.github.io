
 // Modal Image Gallery
 function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }


  // Toggle between showing and hiding the sidebar when clicking the menu icon
  var mySidebar = document.getElementById("mySidebar");

  function w3_open() {
    if (mySidebar.style.display === 'block') {
      mySidebar.style.display = 'none';
    } else {
      mySidebar.style.display = 'block';
    }
  }

  // Close the sidebar with the close button
  function w3_close() {
    mySidebar.style.display = "none";
  }

  // Scroll animation javascript.

  const callback = function (entries) {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-visible");
    });
  };

  const observer = new IntersectionObserver(callback);

  const targets = document.querySelectorAll(".show-on-scroll");
  targets.forEach(function (target) {
    observer.observe(target);
  });

document.getElementById("last-update").innerHTML = document.lastModified;
document.getElementById("copyright-year").innerHTML = (new Date().getFullYear());   

