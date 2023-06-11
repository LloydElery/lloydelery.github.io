// ANIMATE ON SCROLL : const hiddenElements = document.querySelectorAll(".hidden");
// CAROUSEL : const buttons = document.querySelectorAll("[data-carousel-button]");
// STYCKY HEADER : const stickyHeader = document.querySelector('.topbar');

//  ----------------------------ON SCROLL EFFECT----------------------------------------
// All the elements with the class '.hidden' is reffered to as
// 'hiddenElements' in this .js file.
const hiddenElements = document.querySelectorAll(".hidden");

// Creating an observer that takes in a function called 'entries'.
// 'Entries' loops trough every 'entry' with the targeted classList (.hidden)
// and toggles the '.show' class when it 'isIntersecting' = true.
// = the element is visible on screen.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.toggle("show", entry.isIntersecting);
    } else {
      entry.target.classList.remove("show", entry.isIntersecting);
    }
  });
});

// Activating/callback the 'observer' variable. For each 'el'ement in
// 'hiddenElements' do the following => callback the 'observer' function
// to observe each 'el'ement inside the 'hiddenElements' variable.
hiddenElements.forEach((el) => {
  observer.observe(el);
});

// --------------------------------------------------------------------

// -------------------------------CAROUSEL-------------------------------------
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "right" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

//  ----------------------------------STICKY NAVBAR----------------------------------
const body = document.body;
const header = "#topbar";
let lastScroll = 0;
const homeIcon = document.querySelector(".navbar img");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // If on top of the page
  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
  }

  // Listens to 'Scroll-down'
  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  }

  // Listens to 'scroll-up'
  if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }

  lastScroll = currentScroll;
});

// **********************************HOME BUTTON LOGO**************************************

// ----------------------------------RESPONSIVE RESIZING----------------------------------

// const buttons = document.querySelectorAll("[data-carousel-button]");

// const resizeObserver = new ResizeObserver((entries) => {
//   const buttonElement = entries[0];
//   const isSmall = buttonElement.contentRect.width < 770;
//   buttonElement.target.style.paddingTop = isSmall ? 65 : 0;
// });

// resizeObserver.observe(buttons);
