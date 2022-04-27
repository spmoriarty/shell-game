// import functions and grab DOM elements




// let state
//Button
const button = document.getElementById('Choose1');
const button2 = document.getElementById('Choose2');
const button3 = document.getElementById('Choose3');


// Results
let Wisely = document.getElementById('Wisely');
let Poorly = document.getElementById('Poorly');
let Total = document.getElementById('Total');

let count = 0;

//Remove -reset
const removal = () => {
  button.classlist.remove('grenade');
  button2.classlist.remove('grenade');
  button3.classlist.remove('grenade');
};


button.addEventListener('click', () => {
    console.log('You have chosen');
    gameLogic ();
    count++;
    Total.textContent = count;
});
button2.addEventListener('click', () => {
    console.log('You have chosen');
    gameLogic ();
    count++;
    Total.textContent = count;
});
  
button3.addEventListener('click', () => {
    console.log('You have chosen');
    gameLogic ();
    count++;
    Total.textContent = count;
});

const gameLogic = () => {
const randomized = Math.ceil(Math.random() * 3)
if (randomized === 1){
Choose1.classList.add('grenade'); {
Wisely++;
}}
else if (randomized === 2) {
Choose2.classList.add('grenade');
Poorly++;
// need only 2 but one for each button
}};
