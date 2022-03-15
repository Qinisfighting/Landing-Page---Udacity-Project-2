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
const hTitle = document.getElementById("head_title");
const pageHeader = document.querySelector(".page__header");
const title = document.getElementById("my_title");
const bodyBackground = document.querySelector("body");

// change head title's text
hTitle.textContent = `Udacity's Project 2 - Manipulating the DOM`;
// change the header background color
pageHeader.style.background = "#f4a460";
// change title's text
title.textContent = `Qin's Landing Page`;
// change body background color
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
    navList += `<li id="${sectionName}"> <a class="navbar__menu menu__link" href="#${section.id}">${sectionName}</a></li>`;
  });
  // add the tags to the inner htmls
  navbarLi.innerHTML = navList;
}
createNavbar();

/*build a scroll function, here I need help!


const clickItems = document.querySelectorAll(".menu__link");

for (const clickItem of clickItems) {
  clickItem.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(e.currentTarget.dataset.href).scrollIntoView({ behavior: "smooth" });
  });
}

*/

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

//detecting the active section by using Element.getBoundingClientRect() method

function sectionInViewport(section) {
  const sectionInV = section.getBoundingClientRect();
  //the section is active when sectionInV.top >= 0;
  if (sectionInV.bottom < 0) return false;
  if (sectionInV.top > window.innerHeight / 2) return false;
  if (sectionInV.bottom < window.innerHeight / 2) return false;
  if (sectionInV.top < window.innerHeight) return true;

  return sectionInV.top >= 0;
}

// Add class 'your-active-class' to active section and class 'nav_activ' to the active navbar link

function makeActive() {
  for (const section of sections) {
    if (sectionInViewport(section)) {
      const id = section.getAttribute("id");
      sectionName = section.getAttribute("data-nav");
      section.classList.add("your-active-class");
      document.querySelector(`#${sectionName}`).classList.add("nav_active");
    } else {
      const id = section.getAttribute("id");
      sectionName = section.getAttribute("data-nav");
      section.classList.remove("your-active-class");
      document.querySelector(`#${sectionName}`).classList.remove("nav_active");
    }
  }
}

document.addEventListener("scroll", makeActive);

// Hide navigation bar while not scrolling

let timeoutId;

window.addEventListener("scroll", function () {
  document.querySelector("header").style.top = "0";

  clearTimeout(timeoutId);

  if (window.pageYOffset !== 0) {
    timeoutId = setTimeout(function () {
      document.querySelector("header").style.top = "-100px";
    }, 2200);
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
  document.body.scrollTo({
    top: 0,
    behavior: "smooth"
  }); // For Safari
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth"
  }); // For Chrome, Firefox, IE and Opera
}

/**
 * End Main Functions
 */
