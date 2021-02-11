var nombre, asunto, mail, mensaje, boton;

function inicializar()
{
    nombre = document.getElementById('name');
    asunto = document.getElementById('asunt');
    mail = document.getElementById('correo');
    mensaje = document.getElementById('mensaj');
    //boton = document.getElementById('button');

    //boton.addEventListener("click", ValidarDatos(event));
}

function ValidarDatos(event)
{
    
    if(nombre.value.trim() == "") //el trim() elimina los espacios que puede haber al final o al inicio de una letra
    {
        alert('campo "nombre" vacio');

        event.preventDefault();

        return false;
    }

    if(asunto.value.trim() == "")  
    {
        alert('campo "asunto" vacio');

        event.preventDefault();

        return false;
    }

    if(mail.value.trim() == "")  
    {
        alert('campo "mail" vacio');

        event.preventDefault();

        return false;
    }

    if(mensaje.value.trim() == "") 
    {
        alert('campo "mensaje" vacio');

        event.preventDefault();

        return false;
    }

    alert('informacion correcta');

    return true;
}
window.addEventListener("load", inicializar);