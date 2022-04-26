// import functions and grab DOM elements




// let state

const button = document.getElementById('Choose1');

const Wisely = document.getElementById('Wisely');
const Poorly  = document.getElementById('Poorly');
const Total = document.getElementById('Total')

let count = 0;

button.addEventListener('click', () => {
    console.log('You have chosen');
    count++;
    Total.textContent = count;
});



// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
