// import functions and grab DOM elements




// let state

const button = document.getElementById('Choose1', );
const button2 = document.getElementById('Choose2', );
const button3 = document.getElementById('Choose3', );

const Wisely = document.getElementById('Wisely');
const Poorly  = document.getElementById('Poorly');
const Total = document.getElementById('Total')

let count = 0;

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



// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
