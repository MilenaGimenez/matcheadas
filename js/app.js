//---------------------------------------Grilla de MatcheADAs

//Obteniendo elementos del HTML
const grid = document.getElementById("grid-box");
const timer = document.getElementById('time-number')
const helpButton = document.getElementById('help-button');
const restartButton = document.getElementById('restart-button');
const emojis = ["🌎", "⭐", "🌙", "🚀", "🪐"];

// Variables de ayuda
let level;
let gridArr = [];
let size;
let welcome = true;
let time;
let timePause;

// Mostrar modal Bienvenida
window.onload = welcomeModal();

//Evento botones
helpButton.addEventListener('click', welcomeModal)
restartButton.addEventListener('click', restartGame)



//---------------------------------------Generandor de items random


const getRandom = () =>
  emojis[(Math.random() * (emojis.length - 1)).toFixed(0)];
  


//---------------------------------------Generandor de emoji


const generateEmoji = (x, y) => {
  const emojiBox = document.createElement("div");
  emojiBox.dataset.x = x;
  emojiBox.dataset.y = y;
  emojiBox.innerHTML = gridArr[x][y];
  emojiBox.style.width = `${500/level}px`
  emojiBox.style.height = `${500/level}px`
  grid.appendChild(emojiBox);
  emojiBox.addEventListener("click", selectEmoji);
  twemoji.parse(document.body);
};


//---------------------------------------Generandor de grilla


const generateGrid = () => {
  time = 30;
  timer.innerHTML = `00:${time}`;
  gridArr = [];
  grid.innerHTML = "";
  for (i = 0; i < level; i++) {
    gridArr[i] = [];
    for (j = 0; j < level; j++) {
      gridArr[i][j] = getRandom();
      generateEmoji(i, j);
      dropHorizontal();
      dropVertical();
    };
  };
  timePause = setInterval(startTimer, 1000);
  return level;
};


//---------------------------------------Seleccionar emoji


const selectEmoji = (e) => {
  let clickedEmoji = document.querySelector(".selected");
  if (clickedEmoji) {
    if (adjancentEmoji(clickedEmoji, e.path[1])) {
      swapEmojis(clickedEmoji, e.path[1]);
      const vertical = dropVertical();
      const horizontal = dropHorizontal();

      if (horizontal === false && vertical === false) {
        setTimeout(() => {
          swapEmojis(clickedEmoji, e.path[1]);
        }, 1000);
      }
    } else {
      if (e.target.classList.contains("emoji")) {
        e.path[1].classList.add("selected");
        clickedEmoji.classList.remove("selected");
      }
    }
    clickedEmoji.classList.remove("selected");
  } else {
    if (e.target.classList.contains("emoji")) {
      e.path[1].classList.add("selected");
    }
  }
    dropHorizontal()
    dropVertical()
};


//---------------------------------------Emoji adyacente


const adjancentEmoji = (emoji1, emoji2) => {
  const datax1 = Number(emoji1.dataset.x);
  const datax2 = Number(emoji2.dataset.x);
  const datay1 = Number(emoji1.dataset.y);
  const datay2 = Number(emoji2.dataset.y);
  if (
    (datax1 === datax2 && datay1 === datay2 - 1) ||
    (datax1 === datax2 && datay1 === datay2 + 1) ||
    (datay1 === datay2 && datax1 === datax2 + 1) ||
    (datay1 === datay2 && datax1 === datax2 - 1)
  ) {
    return true;
  }
  return false;
};



//---------------------------------------Intercambiar emojis


const swapEmojis = (emoji1, emoji2) => {
  const x1 = Number(emoji1.dataset.x);
  const x2 = Number(emoji2.dataset.x);
  const y1 = Number(emoji1.dataset.y);
  const y2 = Number(emoji2.dataset.y);

  let change = gridArr[x1][y1];
  gridArr[x1][y1] = gridArr[x2][y2];
  gridArr[x2][y2] = change;

  let change2 = emoji1.innerHTML;
  emoji1.innerHTML = emoji2.innerHTML;
  emoji2.innerHTML = change2;
};


//---------------------------------------Match horizontal

const dropHorizontal = () => {
  let result;
  let booleano = false;
  for (let i = 0; i < gridArr.length; i++) {
    for (let j = 0; j < gridArr[i].length; j++) {
      let match = 0;
      for (let k = j; k <= gridArr[i].length; k++) {
        if (gridArr[i][j] === gridArr[i][k]) {
          match++;
        } else {
          if (match >= 3) {
            result = { x: i, y: j, match: match };
            let a = 0;
            while (a < result.match) {
              a++;
              let box = document.querySelector(
                `div[data-x="${result.x}"][data-y="${result.y}"]`
              );
              box.innerHTML = "";
              gridArr[result.x][result.y] = null;
              gridArr[result.x][result.y] = getRandom();
              box.classList.add("horizontal");
              box.innerHTML = gridArr[result.x][result.y];
              twemoji.parse(document.body);
              result.y = result.y + 1;
            }
            booleano = true;
          } else {
            match = 1;
            j = k;
          };
        };
      };
    };
  };
  return booleano;
};


//---------------------------------------Match vertical
const dropVertical = () => {
  let result;
  let booleano = false;
  for (let j = 0; j < gridArr[0].length; j++) {
    for (let i = 0; i < gridArr.length; i++) {
      let match = 0;
      for (let k = i; k <= gridArr.length; k++) {
        if (gridArr[k] && gridArr[i][j] === gridArr[k][j]) {
          match++;
        } else {
          if (match >= 3) {
            result = { x: i, y: j, match: match };
            let a = 0;
            while (a < result.match) {
              a++;
              let box = document.querySelector(
                `div[data-x="${result.x}"][data-y="${result.y}"]`
              );
              box.innerHTML = "";
              gridArr[result.x][result.y] = null;
              gridArr[result.x][result.y] = getRandom();
              box.classList.add("vertical");
              box.innerHTML = gridArr[result.x][result.y];
              twemoji.parse(document.body);
              result.x = result.x + 1;
            }
            booleano = true;
          } else {
            match = 1;
            i = k;
          };
        };
      };
    };
  };
  return booleano;
};


//---------------------------------------Timer


const startTimer = () =>{
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
  clearInterval(timePause);
};