//MOBILE MENU
var btnMobileOpen = document.getElementById("mobile-btn-open");
var btnMobileClose = document.getElementById("mobile-btn-close");

btnMobileOpen.addEventListener("click", function(){
	document.getElementsByTagName("header")[0].classList.add("mobile-open");
}, false);

btnMobileClose.addEventListener("click", function(){
	document.getElementsByTagName("header")[0].classList.remove("mobile-open");
}, false);