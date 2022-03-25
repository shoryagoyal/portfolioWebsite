// When the user scrolls the page, execute myFunction
// https://medium.com/@marcusmichaels/how-to-build-a-carousel-from-scratch-in-vanilla-js-9a096d3b98c9
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector("nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

const decrement = document.querySelector('#decrement'); 
const increment = document.querySelector('#increment');
let pointer = 0; 
const achievements = document.querySelectorAll('.achieve');

decrement.addEventListener('click',() => {
    achievements[pointer].style.display = 'none';
    if(pointer == 0) pointer = achievements.length-1; 
    else pointer--; 
    replaceAchievement();
});

increment.addEventListener('click',() => {
    achievements[pointer].style.display = 'none';
    if(pointer == (achievements.length-1)) pointer = 0;
    else pointer++; 
    replaceAchievement();
});

function replaceAchievement() {
    console.log("pointer="+pointer);
    achievements[pointer].style.display = 'block';
}
