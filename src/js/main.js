import $ from "./querySelectors.js";

// Start Declarations

const $hamburger = $("hamburger");
const $closeHamburger = $("close-hamburger");
const $overlay = $("overlay");
const $sectionHome = $("section-home");
const $sectionMenu = $("section-menu");
const $sectionReservation = $("section-reservation");
const $sectionContact = $("section-contact");
const $sectionDefault = $("section-default");
const sectionSelected = window.location.pathname;

// End Declarations

// Start Starting Actions

showSelectedSection();

// End Starting Actions

// Start Event Listeners

$hamburger.addEventListener("click", () => {
	$overlay.classList.remove("hidden");
	$overlay.classList.add("flex");
});

$closeHamburger.addEventListener("click", () => {
	$overlay.classList.remove("flex");
	$overlay.classList.add("hidden");
});

// End Event Listeners

// Start Functions

function showSelectedSection() {
	if (sectionSelected === "/") {
		$sectionHome.classList.remove("hidden");
	} else if (sectionSelected === "/menu") {
		$sectionMenu.classList.remove("hidden");
	} else if (sectionSelected === "/reservation") {
		$sectionReservation.classList.remove("hidden");
	} else if (sectionSelected === "/contact") {
		$sectionContact.classList.remove("hidden");
	} else {
		$sectionDefault.classList.remove("hidden");
	}
}

// End Functions
