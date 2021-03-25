//Modales de Sweet Alert

//Modal seleccionar dificultad
const levelModal = () => {  
    swal({
        title: "Nuevo Juego",    
        text: "Selecciona una dificultad",
        buttons: {
            facil:{
                text: "Fácil",
                value: "facil"
            },
            normal:{
                text: "Normal",
                value: "normal"
            },
            dificil:{
                text: "Difícil",
                value: "dificil"
            },
        },
        closeOnClickOutside: false,
        closeOnEsc: false,
      })
      .then((value) => {        
          switch (value){
              case "facil":                  
              level = 9;
                break;

              case "normal":   
              level = 8;       
                break;

              case "dificil":  
              level = 7;           
                break;
                default:
          }
          generateGrid();          
      })
}

//Modal bienvenida
const welcomeModal = () => {
    stopTimer();
    swal({
        title: "🚀 ¡Bienvenido/a! 🚀",    
        text: `En MatcheADAs tu objetivo es juntar tres o más ítems del mismo tipo, ya sea en fila o columna. Para eso, selecciona un ítem y a continuación un ítem adyacente para intercambiarlos de lugar. 
        
        Si se forma un grupo, esos ítems se eliminarán y ganarás puuntos. ¡Sigue armando grupos de 3 o más antes de que se acabe el tiempo!
        
        Controles:
        Click izquierdo: selección
        Enter o Espacio: selección
        Flechas o WASD: movimiento e intercambio`,
        button: "A jugar!",
        closeOnClickOutside: false,
        closeOnEsc: false,
      })
      .then(levelModal)    
}


//Modal Restart
const restartGame = () => {
    welcome = true;
    stopTimer();
    swal({
        title: "¿Reiniciar juego?",    
        text: `Perderás todo tu puntaje acumulado`,
        buttons: {
            cancel: "Cancelar",
            confirm: "Nuevo Juego",
        },
        closeOnClickOutside: false,
        closeOnEsc: false,
    })
      .then((value) => {        
        switch (value){
            case null:  
            timePause = setInterval(startTimer, 1000);
              break;

            case true:   
                levelModal();
            break;            
        }        
    })
};


//Modal juego finalizado
const finishGame = () => {    
    stopTimer();
    swal({
        title: "¡Juego terminado!", 
        text: `Puntaje Final: 0`,           
        buttons: {
            newGame:{
                text: "Nuevo juego",
                value: "nuevojuego",
            },
            reiniciar:{
                text: "Reiniciar",
                value: "reiniciar",
            },            
        },
        closeOnClickOutside: false,
        closeOnEsc: false,
    })
      .then((value) => {        
        switch (value){
            case "nuevojuego":  
            levelModal()
              break;

            case "reiniciar":   
            generateGrid(level);
            break;
        }        
    })
    
};