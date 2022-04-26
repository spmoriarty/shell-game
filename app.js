// import functions and grab DOM elements




// let state
//Button
const button = document.getElementById('Choose1');
const button2 = document.getElementById('Choose2');
const button3 = document.getElementById('Choose3');


// Results
const Wisely = document.getElementById('Wisely');
const Poorly  = document.getElementById('Poorly');
const Total = document.getElementById('Total');

let count = 0;
//Remove -reset
button.addEventListener('click', () => {
  button.classlist.remove('grenade');
  button2.classlist.remove('grenade');
  button3.classlist.remove('grenade');
});


button.addEventListener('click', () => {
    console.log('You have chosen');
    randomized ();
    count++;
    Total.textContent = count;
});
button2.addEventListener('click', () => {
    console.log('You have chosen');
    randomized ();
    count++;
    Total.textContent = count;
});
  
button3.addEventListener('click', () => {
    console.log('You have chosen');
    randomized ();
    count++;
    Total.textContent = count;
});


let randomized = Math.ceil(Math.random() * 3); {
if (randomized === 1){
Choose1.classList.add('grenade');
Wisely++;
}
else if (randomized === 2) {
Choose2.classList.add('grenade');
Poorly++;
}
else if (randomized === 3); {
Choose3.classList.add('grenade')
Poorly++;
}};