var popup = document.querySelector(".modal-window");
var linkbtn = document.querySelector(".btn-log");
var closebtn = document.querySelector(".modal-window-close");
var frm = document.querySelector(".btn-send-modal");
var shopwindow = document.querySelector(".shop-content-catalog");
var shoppopup = document.querySelector(".mousemove-block");

function pricefunc() {
	
var rangevalue = document.getElementById("price").value;
document.getElementById("currentprice").value = rangevalue;

}

linkbtn.addEventListener("click",  function(event) {
	event.preventDefault();
popup.classList.add("show"); 

});


closebtn.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("show");
});

shopwindow.addEventListener("mousemove",  function(event) {
	event.preventDefault();
shoppopup.classList.add("show"); 
});

shopwindow.addEventListener("mouseleave",  function(event) {
	event.preventDefault();
shoppopup.classList.remove("show"); 
});




