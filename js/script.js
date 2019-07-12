
/* ---------- NAV ---------- */
function navCollapse() {
  const x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

/* ---------- SLIDER + STORY ---------- */

// values to step to 
const values = ['Once there was a teacher.', 
			  'Once there was a teacher who loved projects more than anything.', 
			  'Once there was a teacher who loved projects more than anything. If her students asked for something new to learn with, her usual response was, "Let\'s make it instead!"',
			  'Once there was a teacher who loved projects more than anything. If her students asked for something new to learn with, her usual response was, "Let\'s make it instead!" The children groaned. And cheered. And they continued in this way until projects filled every corner of the classroom.',  
			  'Once there was a teacher who loved projects more than anything. If her students asked for something new to learn with, her usual response was, "Let\'s make it instead!" The children groaned. And cheered. And they continued in this way until projects filled every corner of the classroom. The teacher couldn\'t help but notice that some of her own teacher-y projects were looking a bit ... frumpy. Maybe this HTML and CSS stuff could pep things up a bit?',
			  'Once there was a teacher who loved projects more than anything. If her students asked for something new to learn with, her usual response was, "Let\'s make it instead!" The children groaned. And cheered. And they continued in this way until projects filled every corner of the classroom. The teacher couldn\'t help but notice that some of her own teacher-y projects were looking a bit ... frumpy. Maybe this HTML and CSS stuff could pep things up a bit? And her world began to tilt on its axis ...',
			  'And her world began to tilt on its axis ... ',
			  'My name is Elizabeth and I\'m a teacher who met code when I wanted to give my classroom community a modern upgrade.',
			  'I absolutely fell in love with tech, and the best part of my days is the time I have set aside for learning programming and computer science.',
			  'I\'ve thoroughly enjoyed using my tech skills to craft resources and solutions. My experience as an educator has given me a unique perspective for thinking about user experience, thinking about the customer\'s goals, and thinking about the end product.',
			  'The entire dev process brings me such pure joy - I love the way logic and design combine for an interactive art form that touches lives. I can\'t imagine not engaging with it, and I think it coincides with my nature in a way that I have a difficult time putting into words.',
			  'I\'d love to work for a great company in a frontend role, with a great team, where I can keep learning and improving. I value being able to contribute, though, and plan to work hard. I\'m on a path of study that will utilize an image recognition API for an app that I\'ll deploy via Heroku, July 2019.',
			  'One of the things I love most about my current role is meeting people from around the world. I\'m excited about interacting with others in the techosphere and learning from everyone\'s wealth of experience and knowledge.',
			  'I\'ve been blown away time and again by the friendliness of the tech community.',
			  'I\'d love to talk about development, sewing, guitar, or raspberryPis.',
			  'Thanks for reading and engaging with me!'];

const input = document.getElementById('myStory'),
   output = document.getElementById('output');

input.oninput = function(){
	output.innerHTML = values[this.value];
};
input.oninput(); // set default value 