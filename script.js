const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const btn_search = document.querySelector("#search");
const btn_reset = document.querySelector("#reset");

// define more constants and variables here
var student_id = 630610756;
var author_mode = 1;
var fullname = "BAANGKOK VANIJYANANDA";

btn_toggle.onclick = () => {
	if(author_mode == 0){
		author.innerHTML = "" + student_id + " " + fullname;
		author_mode = 1;
		btn_toggle.innerHTML = "Display Calculation";
	}else{
		author.innerHTML = "" + (student_id-parseInt(length.value));
		author_mode = 0;
		btn_toggle.innerHTML = "Display Author";
	}
}

// more codes for Search and Reset buttons here
