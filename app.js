// import functions and grab DOM elements




// let state
//Button
const button = document.getElementById('Choose1');
const button2 = document.getElementById('Choose2');
const button3 = document.getElementById('Choose3');


// Results
let Wisely = document.getElementById('Wisely');
let Poor = document.getElementById('Poorly');
let Total = document.getElementById('Total');

let count = 0;
let wisely = 0;


//Remove -reset
function removal() {
    button.classlist.remove('grenade');
    button2.classlist.remove('grenade');
    button3.classlist.remove('grenade');
}


button.addEventListener('click', () => {
    console.log('You have chosen');
    gameLogic(1);

});
button2.addEventListener('click', () => {
    console.log('You have chosen');
    gameLogic (2);
    
});

  
button3.addEventListener('click', () => {
    console.log('You have chosen');
    gameLogic (3);
});

const gameLogic = (buttonNumber) => {
    const randomized = Math.ceil(Math.random() * 3);
    //console.log(randomized);
    if (randomized === buttonNumber){
        //Wisely.classList.add('grenade')
        //button.classList.add('grenade');
            wisely++;
            count++;
    }
    else {
        count++;
    }
    Total.textContent = count;
    Wisely.textContent= wisely;
    Poorly.textContent= count - wisely;
};