// import functions and grab DOM elements




// let state

const button = document.getElementById('Choose1');
const button2 = document.getElementById('Choose2');
const button3 = document.getElementById('Choose3');

const Wisely = document.getElementById('Wisely');
const Poorly  = document.getElementById('Poorly');
const Total = document.getElementById('Total');

let count = 0;

button.addEventListener('click', () => {
  Choose1.classlist.remove('Choice'),
  Choose2.classlist.remove('Choice'),
  Choose3.classlist.remove('Choice'),


const randomized = Math.ceil(Math.random() * 3);
if (randomized === 1){
Choose1.classList.add('choice');
Wisely++;
}
else if (randomized === 2) {
Choose2.clasList.add('choice');
Poorly++;
}
else if (randomized === 3); {
Choose3.classList.add('choice')
Poorly++;
}

button.addEventListener('click', () => {
    console.log('You have chosen');
    count++;
    Total.textContent = count;
});
button2.addEventListener('click', () => {
    console.log('You have chosen');
    count++;
    Total.textContent = count;
});
  
button3.addEventListener('click', () => {
    console.log('You have chosen');
    count++;
    Total.textContent = count;
});
