//MOBILE NAVBAR
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navLinks")
    const navLinks = document.querySelectorAll(".navLinks li");
    burger.addEventListener("click", () => {
         //Toggle navigation
        nav.classList.toggle("navActive");
        //Animate Links
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle')
    });
}
navSlide();

//ANIMATE ON SCROLL
AOS.init({
    offset: 400, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000 // values from 0 to 3000, with step 50ms
});

//BACK 2 TOP BUTTON
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};


//SKILLS BAR 

const altiumBar = document.querySelector('.bar-altium')
const spiceBar = document.querySelector('.bar-spice')
const matlabBar = document.querySelector('.bar-matlab')
const cBar = document.querySelector('.bar-C')
const pythonBar = document.querySelector('.bar-python')

var t1 = new TimelineLite()

t1.fromTo(altiumBar, .75, {width: `calc(0%-6px)`}, {width: `calc(90%-6px)`, ease: Power4.easeOut})
    .fromTo(spiceBar, .75, {width: `calc(0%-6px)`}, {width: `calc(90%-6px)`, ease: Power4.easeOut})
    .fromTo(matlabBar, .75, {width: `calc(0%-6px)`}, {width: `calc(90%-6px)`, ease: Power4.easeOut})
    .fromTo(cBar, .75 ,{width: `calc(0%-6px)`}, {width: `calc(90%-6px)`, ease: Power4.easeOut})
    .fromTo(pythonBar, .75, {width: `calc(0%-6px)`}, {width: `calc(90%-6px)`, ease: Power4.easeOut})


const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills', 
    triggerHook: 0
})

.addTo(controller)

    