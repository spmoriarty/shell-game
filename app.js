// import functions and grab DOM elements




// let state
//Button
const button = document.getElementById('Button1');
const button2 = document.getElementById('Button2');
const button3 = document.getElementById('Button3');


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
    removal();
    gameLogic(1);

});
button2.addEventListener('click', () => {
    removal();
    gameLogic(2);
    
});


button3.addEventListener('click', () => {
    removal();
    gameLogic(3);
});

//Logic
const gameLogic = (buttonNumber) => {
    const randomized = Math.ceil(Math.random() * 3);
    //console.log(randomized);
    if (randomized === buttonNumber){
        //Choose.classList.add('grenade');
        wisely++;
        count++;
        //Grenade1.append(url('https://steamuserimages-a.akamaihd.net/ugc/945081009037914252/61C468F95701104030B156FCBA96493FD13D31D3/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false width=100 height=100'));
    }
    else {
        count++;
    }
    Total.textContent = count;
    Wisely.textContent = wisely;
    Poor.textContent = count - wisely;
    if (randomized === 1) {
        Grenade1.classList.remove('hide');
    }
    if (randomized === 2) {
        Grenade2.classList.remove('hide');
    }
    if (randomized === 3) {
        Grenade3.classList.remove('hide');
    }
};


//Remove -reset
function removal() {
    Grenade1.classList.add('hide');
    Grenade2.classList.add('hide');
    Grenade3.classList.add('hide');
}