//declaracion variables de referencia a objetos
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const user = document.getElementById('user');
const pass = document.getElementById('pass');
const formulario = document.getElementById('formRegistro');

formulario.addEventListener('submit', registro);

function registro(e){
    e.preventDefault();

    let nombreVal = nombre.value;
    let emailVal = email.vaue;
    let userVal = user.value;
    let passVal = pass.value;

    if(nombreVal == '' || emailVal == '' || userVal == '' || passVal == ''){
        return;
    }
    console.log('Validando datos!');
}