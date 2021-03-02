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
        //className: "red-bg",
      });
}

welcomeModal()
