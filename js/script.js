

// script.js is currently used for scroll-related animations and styling for mobile


function identifyScreenAddClass() {
	if(screen.width < 853) {
		var elements = document.querySelectorAll(
			'#graphic-prose, #graphic-vis, .end-scroller'
			)
		for (var x = 0;x < elements.length; x++) {
			elements[x].classList.add('mobile')
		}
	}
}

function identifyScreenAddClassSpacer() {
	if(screen.width < 853) {
		var el1 = document.getElementsByClassName('scrollmagic-pin-spacer')[0]
		el1.classList.add('mobile')
	}
}

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

function slideshowScrollDuration() {
	var endel = document.getElementById('three-text')
	var startel = document.getElementById('slideshow')
	return offset(endel).top - offset(startel).top
}

identifyScreenAddClass();

var controller = new ScrollMagic.Controller();

//pinner

// text blobs

var scene_text_0 = new ScrollMagic.Scene({
	triggerElement: "#zero-text"
})
	.setTween("#zero-text", 0.5, {opacity: 1}) 
	.addTo(controller);

var scene_text_1 = new ScrollMagic.Scene({
	triggerElement: "#one-text",
})
	.setTween("#one-text", 0.5, {opacity: 1})
	.addTo(controller);

var scene_text_2 = new ScrollMagic.Scene({
	triggerElement: "#two-text",
})
	.setTween("#two-text", 0.5, {opacity: 1})
	.addTo(controller);

var scene_text_3 = new ScrollMagic.Scene({
	triggerElement: "#three-text",
})
	.setTween("#three-text", 0.5, {opacity: 1})
	.addTo(controller);

var scene_text_4 = new ScrollMagic.Scene({
	triggerElement: "#four-text",
})
	.setTween("#four-text", 0.5, {opacity: 1})
	.addTo(controller);


//images


//one-img
var scene_img_1a = new ScrollMagic.Scene({
	triggerElement: "#one-text",
})
	.setTween("#one-img", 0.1, {opacity: 1})
	.addTo(controller);

var scene_img_1b = new ScrollMagic.Scene({
	triggerElement: "#one-text",
})
	.setTween("#zero-img", 0.1, {opacity: 0})
	.addTo(controller);

//two-img

var scene_img_2a = new ScrollMagic.Scene({
	triggerElement: "#two-text",
})
	.setTween("#two-img", 0.1, {opacity: 1})
	.addTo(controller);

var scene_img_2b = new ScrollMagic.Scene({
	triggerElement: "#two-text",
})
	.setTween("#one-img", 0.1, {opacity: 0})
	.addTo(controller);

//three-img

var scene_img_3a = new ScrollMagic.Scene({
	triggerElement: "#three-text",
})
	.setTween("#three-img", 0.1, {opacity: 1})
	.addTo(controller);

var scene_img_3b = new ScrollMagic.Scene({
	triggerElement: "#three-text",
})
	.setTween("#two-img", 0.1, {opacity: 0})
	.addTo(controller);


//four-img

var scene_img_4a = new ScrollMagic.Scene({
	triggerElement: "#four-text",
})
	.setTween("#four-img", 0.1, {opacity: 1})
	.addTo(controller);

var scene_img_4b = new ScrollMagic.Scene({
	triggerElement: "#four-text",
})
	.setTween("#three-img", 0.1, {opacity: 0})
	.addTo(controller);


var pinner = new ScrollMagic.Scene({
	triggerElement: ".graphic-vis",
	duration: slideshowScrollDuration(),
	triggerHook: 0.05
})
	.setPin(".graphic-vis",{
		pushFollowers: false
	})
	.addTo(controller);


identifyScreenAddClassSpacer();