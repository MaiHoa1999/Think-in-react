import Sample from "./modules/_sample";

function clicknav() {
    $('.top-wrap .header__left .menu-btn').on('click', function() {

        $('.top-wrap nav').toggleClass('active-nav');
    });
 
}
$(document).ready(() => {
	let sample = new Sample();
	clicknav()
 
});
