window.addEventListener('load', ()=> {
const form = document.getElementById('formulario')
const nombre = document.getElementById('nombre')
const direccion = document.getElementById('direccion')
const email = document.getElementById('email')
const telefono = document.getElementById('telefono')
// const comentario = document.getElementById('comentario')

form.addEventListener('submit', (e) => {
    e.preventDefault()
     validaCampos()
 })

const validaCampos = () => {
   // captura de datos ingresados
   const nombreValor = nombre.value.trim();
   const direccionValor = direccion.value.trim();
   const emailValor = email.value.trim();
   const telefonoValor = telefono.value.trim();
//    const comentarioValor = comentario.value.trim();

    //validando nombre y direccion
   (!nombreValor) ? validaFalla(nombre, 'Este dato es requerido') : validaOk(nombre);
   (!direccionValor) ? validaFalla(direccion, 'Este dato es requerido') : validaOk(direccion);
    
   // validando mail
    if (!emailValor){
        validaFalla(email, 'Este dato es requerido')
    }else if(!validaEmail(emailValor)){
        validaFalla(email, 'El mail no es válido')
    }else { validaOk(email)  } 
    
    // validando el telefono
    if(!telefonoValor){
        validaFalla(telefono, 'Este dato es requerido')
    }else if(!validaTelefono(telefonoValor)){
        validaFalla(telefono, 'solo numeros sin espacios, ni parentesis, ni signos')
    } else if(telefonoValor[0] != '0') {   
        validaFalla(telefono,'no olvides comenzar con 0') 
    } else if(telefonoValor.length != 11) {   
        validaFalla(telefono,'faltan o sobran numeros')            
    }else {validaOk(telefono)}
    

   
                          

}       
const validaFalla = (input,msje) => {
    const formControl = input.parentElement
    const aviso = formControl.querySelector('p')
    aviso.innerText = msje

    formControl.className = 'form-control falla'
}
const validaOk = (input,msje) => {
    const formControl = input.parentElement
    formControl.className = 'form-control ok'
}
const validaEmail = (email) =>{
    return /^[a-zA-Z0-9_-]+(\.[_a-zA-Z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/.test(email);
}
const validaTelefono = (telefono) =>{
    return /^[0-9]+$/.test(telefono);
}


})