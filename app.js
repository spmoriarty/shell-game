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

const Grenade1 = document.getElementById('grenade1');
const Grenade2 = document.getElementById('grenade2');
const Grenade3 = document.getElementById('grenade3');

// Results
let Wisely = document.getElementById('Wisely');
let Poor = document.getElementById('Poorly');
let Total = document.getElementById('Total');

let count = 0;
let wisely = 0;


//Buttons


button.addEventListener('click', () => {
    console.log('You have chosen');
    // removal();
    Grenade1.style.display = 'block';
    gameLogic(1);

});
button2.addEventListener('click', () => {
    console.log('You have chosen');
    // removal();
    gameLogic(2);
    
});
console.log('You have chosen');

button3.addEventListener('click', () => {
    // removal();
    gameLogic(3);
});

//Logic
const gameLogic = (buttonNumber) => {
    const randomized = Math.ceil(Math.random() * 3);
    //console.log(randomized);
    if (randomized === buttonNumber){
        //Choose.classList.add('grenade');
        button.classList.remove('hidden');
        wisely++;
        count++;
        //Grenade1.append(url('https://steamuserimages-a.akamaihd.net/ugc/945081009037914252/61C468F95701104030B156FCBA96493FD13D31D3/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false width=100 height=100'));
    }
    else {
        count++;
    };
    Total.textContent = count;
    Wisely.textContent = wisely;
    Poor.textContent = count - wisely;
};

//Remove -reset
function removal() {
    Grenade1.classList.remove('grenade-hidden');
    Grenade2.classList.remove('grenade-hidden');
    Grenade3.classList.remove('grenade-hidden');
}