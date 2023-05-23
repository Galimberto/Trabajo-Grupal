window.addEventListener("load", () => {
  const form = document.getElementById("my-form");
  const nombre = document.getElementById("nombre");
  const direccion = document.getElementById("direccion");
  const email = document.getElementById("email");
  const telefono = document.getElementById("telefono");
  // const comentario = document.getElementById('comentario')

    form.addEventListener('keyup', () => {
        // e.preventDefault()
        validaCampos()
    })

  const validaCampos = () => {
    // captura de datos ingresados
    const nombreValor = nombre.value.trim();
    const direccionValor = direccion.value.trim();
    const emailValor = email.value.trim();
    const telefonoValor = telefono.value.trim();
    //    const comentarioValor = comentario.value.trim();

// valida nombre
if (!nombreValor){
  validaFalla(nombre, "Este dato es requerido")
  } else if (nombreValor.length < 4){
  validaFalla(nombre, "Ercribe minimo 4 caracteres")
  } else {
   validaOk(nombre);
  }



  //valida direccion
  if (!direccionValor){
     validaFalla(direccion, "Este dato es requerido")
  } else if (direccionValor.length < 8){
    validaFalla(direccion, "Ercribe minimo 8 caracteres")
  } else {
    validaOk(direccion);
  }



    // //validando nombre y direccion
    // !nombreValor
    //   ? validaFalla(nombre, "Este dato es requerido")
    //   : validaOk(nombre);
    // !direccionValor
    //   ? validaFalla(direccion, "Este dato es requerido")
    //   : validaOk(direccion);

    // validando mail
    if (!emailValor) {
      validaFalla(email, "Este dato es requerido");
    } else if (!validaEmail(emailValor)) {
      validaFalla(email, "El mail no es válido");
    } else {
      validaOk(email);
    }

    // validando el telefono
    if (!telefonoValor) {
      validaFalla(telefono, "Este dato es requerido");
    } else if (!validaTelefono(telefonoValor)) {
      validaFalla(
        telefono,
        "solo numeros sin espacios, ni parentesis, ni signos"
      );
    } else if (telefonoValor[0] != "0") {
      validaFalla(telefono, "no olvides comenzar con 0");
    } else if (telefonoValor.length != 11) {
      validaFalla(telefono, "faltan o sobran numeros");
    } else {
      validaOk(telefono);
    }
  };
  const validaFalla = (input, msje) => {
    const formControl = input.parentElement;
    const aviso = formControl.querySelector("p");
    aviso.innerText = msje;

        formControl.className = 'form-control falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector("p");
        aviso.innerText = msje;
        formControl.className = 'form-control ok'
    }
    const validaEmail = (email) => {
        return /^[a-zA-Z0-9_-]+(\.[_a-zA-Z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/.test(email);
    }
    const validaTelefono = (telefono) => {
        return /^[0-9]+$/.test(telefono);
    }

})

var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Gracias por contactarnos!";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML =
              "Ups! Hubo un problema al enviar la información. Por favor, intenta nuevamente";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML =
        "Ups! Hubo un problema al enviar la información. Por favor, intenta nuevamente";
    });
}
form.addEventListener("submit", handleSubmit)