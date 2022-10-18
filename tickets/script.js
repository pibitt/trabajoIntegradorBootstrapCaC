//llama a la funcion calcular precio al presionar el boton 'submit'
let buttonSubmit = document.getElementById('submit');
buttonSubmit.addEventListener("click", calcularPrecio);

//llama a la funcion borrar al presionar el boton borrar
let buttonBorrar = document.getElementById('borrar');
buttonBorrar.addEventListener('click', borrarInfo)


//calcula el precio dependiendo de la cantidad de entradas y el tipo
function calcularPrecio() {
    let cantidadTickets = document.getElementById("cantidadTickets").value;
    let tipoTicket = document.getElementById("tipoTicket").value;
    let precioFull = 200;
    let precioTicket;

    if (tipoTicket === "Estudiante") {
        precioTicket = precioFull * 0.2 * cantidadTickets;

    } else if (tipoTicket === "trainee") {
        precioTicket = precioFull * 0.5 * cantidadTickets;

    } else { precioTicket = precioFull * 0.85 * cantidadTickets; }


    document.getElementById("total").value = "Total a pagar: $" + precioTicket;

}


//borra los campos
function borrarInfo() {
    let inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }

}