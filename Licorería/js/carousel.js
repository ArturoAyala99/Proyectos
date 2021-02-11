window.onload = function () {
    // Variables
    const IMAGENES = [
        'img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg',
        'img/6.jpg', 'img/7.jpg', 'img/8.jpg'
    ];

    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;

    let posicionActual = 0;
    let posicionActual_2 = 1;
    let posicionActual_3 = 2;
    let posicionActual_4 = 3;

    let botonPlay = document.getElementById('play');
    let botonStop = document.getElementById('stop');
    let intervalo;
    

    let botonRetroceder = document.getElementById('prev');
    let botonAvanzar = document.getElementById('next');
    let imagen1 = document.getElementById('imagen1');
    let imagen2 = document.getElementById('imagen2');
    let imagen3 = document.getElementById('imagen3');
    let imagen4 = document.getElementById('imagen4');

    function pasarFoto() {
       
        if (posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
            
        } else {
            posicionActual = posicionActual + 1;
        }
        
        if (posicionActual_2 >= IMAGENES.length - 1) {
            posicionActual_2 = 0;
            
        } else {
            posicionActual_2 = posicionActual_2 + 1;
        }
        
        if (posicionActual_3 >= IMAGENES.length - 1) {
            posicionActual_3 = 0;
            
        } else {
            posicionActual_3 = posicionActual_3 + 1;
        }

        if (posicionActual_4 >= IMAGENES.length - 1) {
            posicionActual_4 = 0;
            
        } else {
            posicionActual_4 = posicionActual_4 + 1;
        }

    
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {

        if (posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
            
        } else {
            posicionActual = posicionActual - 1;
        }
        
        if (posicionActual_2 <= 0) {
            posicionActual_2 = IMAGENES.length - 1;
            
        } else {
            posicionActual_2 = posicionActual_2 - 1;
        }
        
        if (posicionActual_3 <= 0) {
            posicionActual_3 = IMAGENES.length - 1;
            
        } else {
            posicionActual_3 = posicionActual_3 - 1;
        }

        if (posicionActual_4 <= 0) {
            posicionActual_4 = IMAGENES.length - 1;
            
        } else {
            posicionActual_4 = posicionActual_4 - 1;
        }

       
        renderizarImagen ();
    }
    
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        // Desactivamos los botones de control
        botonAvanzar.setAttribute('disabled', true);
        botonRetroceder.setAttribute('disabled', true);
        botonPlay.setAttribute('disabled', true);
        botonStop.removeAttribute('disabled');

    }

    function stopIntervalo() {
        clearInterval(intervalo);
        // Activamos los botones de control
        botonAvanzar.removeAttribute('disabled');
        botonRetroceder.removeAttribute('disabled');
        botonPlay.removeAttribute('disabled');
        botonStop.setAttribute('disabled', true);
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        imagen1.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
        imagen2.style.backgroundImage = `url(${IMAGENES[posicionActual_2] })`;
        imagen3.style.backgroundImage = `url(${IMAGENES[posicionActual_3] })`;
        imagen4.style.backgroundImage = `url(${IMAGENES[posicionActual_4] })`;
        
    }

    // Eventos
    botonAvanzar.addEventListener('click', pasarFoto);
    botonRetroceder.addEventListener('click', retrocederFoto);

    botonPlay.addEventListener('click', playIntervalo);
    botonStop.addEventListener('click', stopIntervalo)
    // Iniciar
    renderizarImagen();
} 