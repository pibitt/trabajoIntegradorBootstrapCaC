//llama a la funcion calcular precio al presionar el boton 'submit'
let buttonSubmit = document.getElementById('submit');
buttonSubmit.addEventListener("click", calcularPrecio);

//llama a la funcion borrar al presionar el boton borrar
let buttonBorrar = document.getElementById('borrar');
buttonBorrar.addEventListener('click', borrarInfo)

function calcularPrecio() {
    let cantidadTickets = document.getElementById("cantidadTickets").value;
    let tipoTicket = document.getElementById("tipoTicket").value;
    let precioTicket;

    if (tipoTicket === "Estudiante") {
        precioTicket = 200 * 0.2 * cantidadTickets;

    } else if (tipoTicket === "trainee") {
        precioTicket = 200 * 0.5 * cantidadTickets;

    } else { precioTicket = 200 * 0.85 * cantidadTickets; }


    document.getElementById("total").value = "Total a pagar: $" + precioTicket;

}

function borrarInfo() {
    let inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }

}