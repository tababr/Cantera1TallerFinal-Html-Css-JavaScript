const main = () => {
    validate();
}

const validate = () => {
    const submit = document.querySelector("#submit");

    submit.addEventListener('click', () => {
        const name = document.getElementById("name");
        const lastName = document.getElementById("lastName");
        const email = document.getElementById("email");
        const messageSubject = document.getElementById("messageSubject");
        const message = document.getElementById("message");

        if (name.validity.valueMissing) {
            alert("Nombre requerido");
        } else if (lastName.validity.valueMissing) {
            alert("Apellido requerido");
        } else if (email.validity.valueMissing) {
            alert("Correo requerido");
        } else if (messageSubject.validity.valueMissing) {
            alert("Asunto requerido");
        } else if (message.validity.valueMissing) {
            alert("Mensage requerido");
        } else {
            console.log("Nombre: ", name.value);
            console.log("Apellido: ", lastName.value);
            console.log("Correo: ", email.value);
            console.log("Asunto: ", messageSubject.value)
            console.log("Mensaje: ", message.value);
            form.reset();
        }
    })
}

