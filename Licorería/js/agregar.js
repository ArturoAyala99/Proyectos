function inicializar()
{
    var borrar = document.getElementById("eliminar");
    borrar.addEventListener("click", eliminar);

    var boton = document.getElementById("agregar");
    boton.addEventListener("click", addsubject);
}

function eliminar()
{
    var padre = document.getElementById("lista"),
     referencia = padre.getElementsByTagName("li");//se obtienen todos los elementos que estan dentro de "lista"
    var materia = document.getElementById("subject");

    for(var i = 0; i < referencia.length; i ++)
    {
        if(materia.value == referencia[i].textContent)//si materia.value es igual al contenido del texto de referncia en la posicion [i]
        {
            padre.removeChild(referencia[i]);
        }
    }

    materia.value="";
    materia.focus();
}

function addsubject()
{

  var elemento = document.createElement("li"), //crear el elemento
      materia = document.getElementById("subject");
      contenido = document.createTextNode(materia.value); //crear el contenido
  elemento.appendChild(contenido); //agregar el contenido al elemento
  var padre = document.getElementById("lista");
  //var padre2 = document.getElementsByTagName("li")[0].parentNode; //otra manera de hacerlo a la de la primera opcion
  padre.appendChild(elemento);
  
  materia.value="";//limpiar la caja de texto
  materia.focus();//que el cursor se ponga en el control que indique (en este caso es en subject)

}
window.addEventListener("load", inicializar); //para iniciar la pagina con la funcion inicializar