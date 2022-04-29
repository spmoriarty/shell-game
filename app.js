// import functions and grab DOM elements




// let state
//Button
const button = document.getElementById('Button1');
const button2 = document.getElementById('Button2');
const button3 = document.getElementById('Button3');

const Grenade = document.getElementById('grenade');

const ChooseA = document.getElementById('Choose1');
const ChooseB = document.getElementById('Choose2');
const ChooseC = document.getElementById('Choose3');


// Results
let Wisely = document.getElementById('Wisely');
let Poor = document.getElementById('Poorly');
let Total = document.getElementById('Total');

let count = 0;
let wisely = 0;


//Buttons
button.addEventListener('click', () => {
    console.log('You have chosen');
    removal();
    gameLogic(1);

});
button2.addEventListener('click', () => {
    console.log('You have chosen');
    removal();
    gameLogic(2);
    
});

button3.addEventListener('click', () => {
    console.log('You have chosen');
    removal();
    gameLogic(3);
});

//Logic
const gameLogic = (buttonNumber) => {
    const randomized = Math.ceil(Math.random() * 3);
    //console.log(randomized);
    if (randomized === buttonNumber){
        //Choose.classList.add('grenade');
        button.classList.add('grenade');
        wisely++;
        count++;
    }
    else {
        count++;
    }
    Total.textContent = count;
    Wisely.textContent = wisely;
    Poor.textContent = count - wisely;
};

//Remove -reset
function removal() {
    button.classList.remove('grenade');
    button2.classList.remove('grenade');
    button3.classList.remove('grenade');
};