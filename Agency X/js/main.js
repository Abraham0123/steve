$(document).foundation();
// JavaScript Document
(function(){
var canada = document.querySelectorAll('.steve');
var content = document.querySelector('#steveContent');

var hit1 = document.querySelector("#steve0"),
		hit2 = document.querySelector("#steve1"),
		hit3 = document.querySelector("#steve2");
		
function done1() {
			document.querySelector("#image").src="images/the_man.jpg";
			//document.write("<p>The MAN</p>");

		}
		
		function done2() {
			document.querySelector("#image").src="images/the_myth.jpg";
		}
		
		function done3() {
			document.querySelector("#image").src="images/the_legend.jpg";
		}		
		
		
		
		hit1.addEventListener("click",done1, false);
		hit2.addEventListener("click",done2, false);
		hit3.addEventListener("click",done3, false);

})();