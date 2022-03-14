//Script para el formulario en colaboracion

//let datos = {};
let datos =[];


function validarForm(event){
    event.preventDefault();
    let useR = document.querySelector('.user').value;
    let password = document.querySelector('.pass').value;

   datos.push(useR);
   datos.push(password);
   console.log(datos);
   
}

//Guardar datos en un fichero
document.querySelector('.enviarForm1').addEventListener('click',validarForm);








