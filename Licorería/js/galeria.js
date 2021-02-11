var modal;
var span;
var modalImg;

function inicializar()
{
    modal = document.getElementById("diseno");
    span = document.getElementsByClassName("close")[0];
    modalImg = document.getElementById("img");
}

function mostrarModal(src) //recibiendo la url de la imagen a la que le doy click
{
    modal.style.display = "block"; //muestra el fondo en negro y la x
    modalImg.src = src; //mostrar la imagen en grande

    span.onclick = function() //para que funcione la x de cerrar
    { 
        modal.style.display = "none"; //ocultar el modal
  
    }

    
}
window.addEventListener("load", inicializar);