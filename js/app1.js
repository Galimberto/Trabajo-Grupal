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
       (!nombreValor) ? validaFalla(nombre, 'This data is required') : validaOk(nombre);
       (!direccionValor) ? validaFalla(direccion, 'This data is required') : validaOk(direccion);
        
       // validando mail
        if (!emailValor){
            validaFalla(email, 'This data is required')
        }else if(!validaEmail(emailValor)){
            validaFalla(email, 'The email is not valid')
        }else { validaOk(email)  } 
        
        // validando el telefono
        if(!telefonoValor){
            validaFalla(telefono, 'This data is required')
        }else if(!validaTelefono(telefonoValor)){
            validaFalla(telefono, 'only numbers without spaces, or parentheses, or signs')
        } else if(telefonoValor[0] != '0') {   
            validaFalla(telefono,"don't forget to start with 0") 
        } else if(telefonoValor.length != 11) {   
            validaFalla(telefono,'missing or excess numbers')            
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