// DOM

const findMeHandler = document.getElementById("find-me");
const contactBoxHandler = document.querySelector(".contact-box");
const mobileMenuHandler = document.querySelector("#mobileHeader span");
const mobileMenu = document.querySelector(".side-nav");
const sideNaveHandler = document.querySelectorAll(".close-side-nav");
const sideNavDropdownHendler = document.querySelector("#side-nav-dropdown");
const sideNavSubMenu = document.getElementById("side-nav-menu");
const sideNavMenuItems = document.querySelectorAll("#side-nav-menu a");
const toTop = document.getElementById("to-top");
const submitHandler = document.querySelectorAll(".sub-btn");

// Functions

const toggler = () => {
  if (sideNavSubMenu.classList.contains("close")) {
    sideNavSubMenu.classList.remove("close");
    sideNavSubMenu.classList.add("open");
  } else {
    sideNavSubMenu.classList.remove("open");
    sideNavSubMenu.classList.add("close");
  }
};

// Listeners

findMeHandler.addEventListener("mouseenter", () => {
  contactBoxHandler.style.display = "grid";
  findMeHandler.style.display = "none";
});

contactBoxHandler.addEventListener("mouseleave", () => {
  findMeHandler.style.display = "block";
  contactBoxHandler.style.display = "none";
});

mobileMenuHandler.addEventListener("click", () => {
  mobileMenu.style.display = "block";
});

sideNaveHandler.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    mobileMenu.style.display = "none";
  });
});

sideNavDropdownHendler.addEventListener("click", (e) => {
  e.preventDefault();
  toggler();
});

sideNavMenuItems.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    toggler();
  });
});

submitHandler.forEach((elem) => {
  elem.addEventListener("click", () => {
    alert("Under construction aleksandar.stanojevic.1509@gmail.com");
  });
});

document.addEventListener("scroll", (event) => {
  if (
    document.body.scrollTop > 120 ||
    document.documentElement.scrollTop > 120
  ) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
});
