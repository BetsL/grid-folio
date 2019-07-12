
/* ---------- SLIDER + STORY ---------- */

// values to step to 
const values = ['Once there was a teacher.', 
			  'She liked to make things.', 
			  'She taught her students to make things', 
			  'Projects filled every corner of her classroom',
			  'red',
			  'orange',
			  'yellow',
			  'green',
			  'blue',
			  'purple'];

const input = document.getElementById('myStory'),
   output = document.getElementById('output');

input.oninput = function(){
	output.innerHTML = values[this.value];
};
input.oninput(); // set default value 