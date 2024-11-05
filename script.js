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
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim(); 
        const telefono = document.getElementById("telefono").value.trim();
        const resultDiv = document.getElementById("result");

        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        const telefonoRegex = /^[0-9]{10}$/;

        let isValid = true;
        let errorMessage = "<ul>"; // Para mostrar mensajes de error

        if (nombre === "") {
            errorMessage += "<li>El nombre es obligatorio.</li>";
            isValid = false;
        }

        if (!emailRegex.test(email)) {
            errorMessage += "<li> Email no válido,solo minuscula.</li>";
            isValid = false;
        }

        if (!telefonoRegex.test(telefono)) {
            errorMessage += "<li>El teléfono debe tener 10 dígitos.</li>";
            isValid = false;
        }

        errorMessage += "</ul>";

        if (isValid) {
            resultDiv.innerHTML = `<p>Gracias ${nombre}, Hemos recibido tu mensaje.</p>`;
            resultDiv.style.color = "green";

            document.getElementById("contactForm").reset();

        } else {
            resultDiv.innerHTML = errorMessage;
            resultDiv.style.color = "red";
        }
        
    });
});
