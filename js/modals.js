//MODAL BIENVENIDA

const welcomeModal = () => {
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
      }).then((value) => {
          if(value){
            levelModal()
          }
      })
}

welcomeModal()

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
              crearTablero(facil);
                breack;

              case "normal":   
              crearTablero(normal);        
                breack;

              case "dificil":  
              crearTablero(dificil);           
                breack;
                default:
          }
          /* root.innerHTML = longitud */
      })
}

/* levelModal() */