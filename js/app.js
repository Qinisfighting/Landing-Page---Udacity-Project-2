/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const header = document.querySelector(".page__header");
const sections = document.querySelectorAll("section");
const navbarLi = document.getElementById("navbar__list");
let navList = "";
// change head title's text
const hTitle = document.getElementById("head_title");
// change the header background color
const pageHeader = document.querySelector(".page__header");
// change title's text
const title = document.getElementById("my_title");
// change body background color
const bodyBackground = document.querySelector("body");

hTitle.textContent = `Udacity's Project 2 - Manipulating the DOM`;
pageHeader.style.background = "#f4a460";
title.textContent = `Qin's Landing Page`;
bodyBackground.style.background = "rgb(251,183,45)";
bodyBackground.style.background =
  "linear-gradient(0deg, rgba(251,183,45,0.7654412106639531) 0%, rgba(223,30,30,0.9475140397956058) 100%)";

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// build the nav

function createNavbar() {
  sections.forEach((section) => {
    //use html section tags and data-nav attribute to create navi bar list

    sectionName = section.getAttribute("data-nav");
    navList += `<li> <a class="navbar__menu menu__link" href="#${section.id}">${sectionName}</a></li>`;
  });
  // add the tags to the inner htmls
  navbarLi.innerHTML = navList;
}
createNavbar();

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

//detecting the active section by using Element.getBoundingClientRect() method

function sectionInViewport(section) {
  const sectionInV = section.getBoundingClientRect();
  // the section is active when top >= 0
  return sectionInV.top >= 0;
}

// Add class 'your-active-class' to active section and class 'nav_activ' to the active navbar link

function makeActive() {
  for (const section of sections) {
    if (sectionInViewport(section)) {
      const id = section.getAttribute("id");
      section.classList.add("your-active-class");
      document.querySelector(`.${id}`).classList.add("nav_active");
    } else {
      const id = section.getAttribute("id");
      section.classList.remove("your-active-class");
      document.querySelector(`.${id}`).classList.remove("nav_active");
    }
  }
}

document.addEventListener("scroll", makeActive);

//make sections collapsible
//https://www.w3schools.com/howto/howto_js_collapsible.asp

const coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const landing__container = this.nextElementSibling;
    if (landing__container.style.display === "block") {
      landing__container.style.display = "none";
    } else {
      landing__container.style.display = "block";
    }
  });
}

// Hide fixed Navigation bar while not scrolling

let timeoutId;

window.addEventListener("scroll", function () {
  document.querySelector("header").style.top = "0";

  clearTimeout(timeoutId);

  if (window.pageYOffset !== 0) {
    timeoutId = setTimeout(function () {
      document.querySelector("header").style.top = "-100px";
    }, 500);
  }
});

//Get the scrollTop button:
//https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
