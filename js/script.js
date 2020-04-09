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

AOS.init({
    offset: 400, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000 // values from 0 to 3000, with step 50ms
});

const altiumBar = document.querySelector('.bar-altium')
const spiceBar = document.querySelector('.bar-spice')
const matlabBar = document.querySelector('.bar-matlab')
const cBar = document.querySelector('.bar-C')
const pythonBar = document.querySelector('.bar-python')

var t1 = TimelineLite()

t1.fromTo(altiumBar, .75, {width: `calc(0%-6px)`}, {width: `calc(90%-6px)`, ease: Power4.easeOut})
    .fromTo(spiceBar, .75, {width: `calc(0%-6px)`}, {width: `calc(90%-6px)`, ease: Power4.easeOut})
    .fromTo(matlabBar, .75, {width: `calc(0%-6px)`}, {width: `calc(90%-6px)`, ease: Power4.easeOut})
    .fromTo(cBar, .75 ,{width: `calc(0%-6px)`}, {width: `calc(90%-6px)`, ease: Power4.easeOut})
    .fromTo(pythonBar, .75, {width: `calc(0%-6px)`}, {width: `calc(90%-6px)`, ease: Power4.easeOut})


const controller = ScrollMagic.Controller()
const scene = ScrollMagic.Scene({
    triggerElement: '.skills', 
    triggerHook: 0
})
.setTween(t1)
.addTo(controller)

    