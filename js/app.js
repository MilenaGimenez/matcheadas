//GRILLA

const tab = document.getElementById('grid-box');

let items = ["🌎", "⭐", "🌙", "🚀", "🪐"];
const helpButton = document.getElementById('help-button');
const restartButton = document.getElementById('restart-button');



const timer = document.getElementById('time-number')
let time;
let restTime;



let optionWelcome = true;



let level = 0;


const tamanoGrilla = (nivel, div) => {
    div.style.width = `calc(32rem / ${nivel}) - 1.02rem`

    div.style.height = `calc(32rem / ${nivel}) - 1.02rem` 
}

const crearTablero = () => {
    time = 30;
    timer.innerHTML = `00:${time}`
    while (tab.firstChild) {
        tab.removeChild(tab.firstChild);
    }
    for (let i = 0; i < level; i++) {        
        for (let j = 0; j < level; j++) {
            const newd = document.createElement("div");
            tamanoGrilla(level, newd)
            newd.innerHTML = items[getRandom(0, 5)];
            tab.appendChild(newd);
            newd.style.width = `${500/level}px`
            newd.style.height = `${500/level}px`
            twemoji.parse(document.body);

        }
    };
    restTime = setInterval(myTimer, 1000);
    return level
};

const getRandom = (min, max) => {
    let random = Math.random();
    return Math.floor(random * (max - min)) + min;
}


window.onload = welcomeModal();




helpButton.addEventListener('click', welcomeModal)
restartButton.addEventListener('click', restartGame)



// Timer

const myTimer = () =>{
    if(time <= 30 && time >0){
      time =  time -1
      let seconds = time % 60;
      let minutes = ((time - seconds) / 60) % 60; 
      let txtSeconds = seconds < 10 ? '0' + seconds : seconds
      let txtMinutes = minutes < 10 ? '0' + minutes : minutes
      timer.innerHTML = `${txtMinutes}:${txtSeconds}`
  
    } else {
        finishGame()
      }
  };
  
  
  function stopTimer() {
    clearInterval(restTime);
  }