document.addEventListener("DOMContentLoaded", function () {
    const images = ["img/imagen1.jpg", "img/imagen2.jpg", "img/imagen3.jpg", "img/imagen4.jpg", "img/imagen5.jpg", "img/imagen6.jpg"];
    let currentIndex = 0;
    const carouselImage = document.getElementById("carousel-image");

    // Verifica si existe el elemento de imagen antes de acceder a él
    if (carouselImage) {
        document.getElementById("next").addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % images.length;
            carouselImage.src = images[currentIndex];
        });

        document.getElementById("prev").addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            carouselImage.src = images[currentIndex];
        });
    }

    // Validación del formulario de contacto
    const contactForm = document.getElementById("contactForm");
    contactForm.setAttribute("novalidate", "novalidate"); // Agregar novalidate para evitar validación HTML
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const resultDiv = document.getElementById("result");

        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        const telefonoRegex = /^[0-9]{10}$/;

        let isValid = true;

        // Limpia el contenido anterior en el div de resultado
        resultDiv.innerHTML = "";

        if (nombre === "" || nombre.length < 3) {
            const nameError = document.createElement("p");
            nameError.textContent = "El nombre es obligatorio y debe tener al menos 3 caracteres.";
            nameError.style.color = "red";
            resultDiv.appendChild(nameError);
            isValid = false;
        }

        if (!emailRegex.test(email)) {
            const emailError = document.createElement("p");
            emailError.textContent = "Email no válido, debe estar en minúsculas.";
            emailError.style.color = "red";
            resultDiv.appendChild(emailError);
            isValid = false;
        }

        if (!telefonoRegex.test(telefono)) {
            const telefonoError = document.createElement("p");
            telefonoError.textContent = "El teléfono debe tener 10 dígitos.";
            telefonoError.style.color = "red";
            resultDiv.appendChild(telefonoError);
            isValid = false;
        }

        if (isValid) {
            const successMessage = document.createElement("p");
            successMessage.textContent = `Gracias ${nombre}, hemos recibido tu mensaje.`;
            successMessage.style.color = "green";
            resultDiv.appendChild(successMessage);

            contactForm.reset();
        }
    });
});
