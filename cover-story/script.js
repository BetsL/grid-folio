const slider = document.getElementById('myRange');
const output = document.getElementById('demo');

// display default slider value
output.innerHTML = slider.value;

// update the current slider value
slider.oninput = function(){
	output.innerHTML = this.value;
} 