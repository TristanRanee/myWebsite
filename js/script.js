const altiumBar = document.querySelector('bar-altium')
const spiceBar = document.querySelector('bar-spice')
const matlabBar = document.querySelector('bar-matlab')
const cBar = document.querySelector('bar-C')
const pythonBar = document.querySelector('bar-python')

var t1 = new TimelineLite()
t1.fromTo(altiumBar, .75, {width: `calc(0%-6px)`}, {width: `calc(90%-6px)`, ease: Power4.easeOut})
    .fromTo(spiceBar, .75, {width: `calc(0%-6px)`}, {width: `calc(90%-6px)`, ease: Power4.easeOut})
    .fromTo(matlabBar, .75, {width: `calc(0%-6px)`}, {width: `calc(90%-6px)`, ease: Power4.easeOut})
    .fromTo(cBar, .75 ,{width: `calc(0%-6px)`}, {width: `calc(90%-6px)`, ease: Power4.easeOut})
    .fromTo(pythonBar, .75, {width: `calc(0%-6px)`}, {width: `calc(90%-6px)`, ease: Power4.easeOut})


const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({triggerElement: '.skills', triggerHook: 0})
.setTween(t1)
.addTo(controller)
