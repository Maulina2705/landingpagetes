// =========================
// DARK MODE
// =========================

const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  // ICON CHANGE
  const icon = darkModeToggle.querySelector("i");

  if(document.body.classList.contains("dark-mode")){
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }else{
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }

});


// =========================
// HAMBURGER MENU
// =========================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// =========================
// CLOSE MENU WHEN CLICK
// =========================

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });

});


// =========================
// NAVBAR SCROLL EFFECT
// =========================

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){

    navbar.style.background = "rgba(5,11,20,0.95)";
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";

  }else{

    navbar.style.background = "rgba(255,255,255,0.1)";
    navbar.style.boxShadow = "none";

  }

});


// =========================
// SIMPLE SCROLL ANIMATION
// =========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  sections.forEach(section => {

    const top = window.scrollY;
    const offset = section.offsetTop - 300;
    const height = section.offsetHeight;

    if(top > offset && top < offset + height){

      section.style.opacity = "1";
      section.style.transform = "translateY(0px)";

    }

  });

});


// =========================
// INITIAL SECTION STYLE
// =========================

sections.forEach(section => {

  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 1s ease";

});


// =========================
// HERO LOAD ANIMATION
// =========================

window.addEventListener("load", () => {

  const heroContent = document.querySelector(".hero-content");

  heroContent.style.opacity = "1";
  heroContent.style.transform = "translateY(0)";

});
