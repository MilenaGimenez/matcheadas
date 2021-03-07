/* const root = document.getElementById('restart-box')
const restartButton = document.getElementById('restart-button');

restartButton.addEventListener('click', (e) => {
  
  swal("¡Perderás todo tu puntaje acumulado!", {
    title: "¿Reiniciar juego?",
    buttons: ["Cancelar", "Nuevo juego"],
  }); 
  
})
 */


//GRILLA

const tab = document.getElementById('grid-box');

let items = ["🌎", "⭐", "🌙", "🚀", "🪐"];

/* let dificulty = 0; */

const facil = 9;
const normal = 8;
const dificil = 7;

let level;

const tamanoGrilla = (nivel, div) => {
    div.style.width = `calc(32rem / ${nivel}) - 1.02rem`
    div.style.height = `calc(32rem / ${nivel}) - 1.02rem`
    /* div.style.width = `calc(500px / ${nivel}) - 1.02rem`
    div.style.height = `calc(500px / ${nivel}) - 1.02rem` */
    /* div.style.width = `${500 / level}px`; */
    
}

const crearTablero = (nivel) => {
    while (tab.firstChild) {
        tab.removeChild(tab.firstChild);
    }
    for (let i = 0; i < nivel; i++) {        
        for (let j = 0; j < nivel; j++) {
            const newd = document.createElement("div");
            tamanoGrilla(nivel, newd)
            newd.innerHTML = items[getRandom(0, 5)];
            tab.appendChild(newd);
            newd.style.width = `${500/nivel}px`
            newd.style.height = `${500/nivel}px`
            twemoji.parse(document.body);
        }
    }
};

const getRandom = (min, max) => {
    let random = Math.random();
    return Math.floor(random * (max - min)) + min;
}

/* const obtenerEmoj = console.log(`posicion:`, items[getRandom(0, 4)]) */


//getRandom(6, 10);

/* crearTablero(); */


//Timer no funciona
/* const contador = document.getElementById('time-number')

let time = 30

setInterval(()=>{
    if(time > -1){
        contador.innerHTML = time
        time--
    }else{
        alert('juego terminado')
        //swal juego terminado
        return
    }
    function myStopFunction(){
        clearInterval(time)
    }
}, 1000)

myStopFunction() */