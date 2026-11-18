
// ---------------------- Navbar Scroll Effect --------------------- //
// Select the header element
const header = document.querySelector('.head_menu');

// Add scroll event listener
window.addEventListener('scroll', function() {
    // Toggle 'scrolled' class based on scroll position
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    }

    // Remove the class if scrolled back to top
    else {
        header.classList.remove('scrolled');
    }
  }
);



document.getElementById('dropbtn').addEventListener('click', function() {
    const nav = document.querySelector('.topnav');
    nav.classList.toggle('active');
});


// ---------------------- Scroll to Top Button --------------------- //

// Get the button:
let topbtn = document.getElementById("topBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // Check the scroll position
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topbtn.style.display = "block";
  }
  // Hide the button when near the top
  else {
    topbtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    // Modern approach with smooth animation support
    // This works in most modern browsers (Chrome, Firefox, Edge, Safari 14+)
window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


// ---------------------- Image Slider --------------------- //
// Initialize slide index
let slideIndex = 1;
showSlides(slideIndex);

// Start the auto-slide timer (3000ms = 3 seconds)
let autoSlideInterval = setInterval(function() {
  plusSlides(1);
}, 3000); 

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  resetTimer(); // Reset timer when user manually changes slide
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  resetTimer(); // Reset timer when user manually changes slide
}

// Function to display the slides//
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Function to reset the timer
// This prevent the slide from jumping immediately after a manual change
function resetTimer() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(function() {
    plusSlides(1);
  }, 3000);
}

