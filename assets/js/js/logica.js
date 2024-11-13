function asignarEventos(){
    let elBoton = document.getElementById('btnEnviar');
    elBoton.addEventListener('click', enviarMensaje);

    let elDivSinLeer = document.getElementById('divSinLeer');
    elDivSinLeer.addEventListener('click', cambiarTextoNormal);


    let contenedorHoraActual = document.getElementById('horaActual');
    let laHoraActual = mostrarHoraActual();
    
    let hora = laHoraActual.getHours();
    let minutos = laHoraActual.getMinutes();
    let segundos = laHoraActual.getSeconds();
    let horaCompleta = `${hora}`+ ":" +`${minutos}` + ":" + `${segundos}` + " hrs" ;

    contenedorHoraActual.innerHTML = horaCompleta;

}

function cambiarTextoNormal(){
    let parrafosSinLeer = document.getElementsByClassName('sinLeer');
    for(let i=0; i < parrafosSinLeer.length; i++){
        parrafosSinLeer[i].style.fontWeight = 'normal';
    }
}


function mostrarHoraActual(){
    var currentTime = new Date();
    return currentTime;
}

function enviarMensaje(){
    //IDENTIFICAMOS Y MOSTRAMOS EL MENSAJE DEL CONTENEDOR
    let elContenedor = document.getElementById('contenedorMensajeEnviado');
    elContenedor.style.display='block';
    
    //EXTRAEMOS EL MENSAJE DIGITADO EN LA CAJA DE TEXTO
    let laCajaTexto = document.getElementById('txtMensaje');

    //ENVIAMOS EL MENSAJE AL PARRAFO ADECUADO
    let elMensaje = document.getElementById('mensajeEnviado');
    elMensaje.innerHTML = laCajaTexto.value;
}