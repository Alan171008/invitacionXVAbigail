/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 2000);

});


/* ==========================================
   CUENTA REGRESIVA
========================================== */

const fechaEvento = new Date("July 11, 2026 18:00:00").getTime();

function actualizarContador() {

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {

        document.querySelector(".countdown").innerHTML =
            "<h2>🎉 ¡Hoy es el gran día! 🎉</h2>";

        return;
    }

    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const segundos = Math.floor(
        (diferencia % (1000 * 60))
        / 1000
    );

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

actualizarContador();

setInterval(actualizarContador, 1000);


/* ==========================================
   MUSICA
========================================== */

const musicButton = document.getElementById("musicButton");
const musica = document.getElementById("musica");

let reproduciendo = false;

musicButton.addEventListener("click", () => {

    if (!reproduciendo) {

        musica.play();

        musicButton.innerHTML = "⏸️";

        reproduciendo = true;

    } else {

        musica.pause();

        musicButton.innerHTML = "🎵";

        reproduciendo = false;
    }

});


/* ==========================================
   CONFIRMACION WHATSAPP
========================================== */

const formulario = document.getElementById("confirmacionForm");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const nombre =
        document.getElementById("nombre").value;

    const invitados =
        document.getElementById("invitados").value;

    const respuesta =
        document.getElementById("respuesta").value;

    const mensaje =

`🌸 Confirmación XV Años Abigail Ortiz González 🌸

Nombre: ${nombre}

Invitados: ${invitados}

Respuesta: ${respuesta}`;

    const numero = "528443514881";

    const url =
        `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

});


/* ==========================================
   EFECTO APARICION AL SCROLL
========================================== */

const elementos = document.querySelectorAll(
    ".frase, .contador, .galeria, .evento, .itinerario, .dresscode, .regalos, .confirmacion"
);

function mostrarElementos() {

    elementos.forEach((elemento) => {

        const posicion =
            elemento.getBoundingClientRect().top;

        const pantalla =
            window.innerHeight * 0.85;

        if (posicion < pantalla) {

            elemento.classList.add("visible");
        }

    });

}

window.addEventListener("scroll", mostrarElementos);

mostrarElementos();


/* ==========================================
   ZOOM DE IMAGENES
========================================== */

const imagenes =
    document.querySelectorAll(".gallery img");

imagenes.forEach((imagen) => {

    imagen.addEventListener("click", () => {

        const modal =
            document.createElement("div");

        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.background = "rgba(0,0,0,.9)";
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
        modal.style.zIndex = "99999";

        const imgGrande =
            document.createElement("img");

        imgGrande.src = imagen.src;
        imgGrande.style.maxWidth = "90%";
        imgGrande.style.maxHeight = "90%";
        imgGrande.style.borderRadius = "15px";

        modal.appendChild(imgGrande);

        document.body.appendChild(modal);

        modal.addEventListener("click", () => {

            modal.remove();

        });

    });

});


/* ==========================================
   ANIMACION SUAVE HERO
========================================== */

window.addEventListener("DOMContentLoaded", () => {

    const hero =
        document.querySelector(".hero-overlay");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(50px)";

    setTimeout(() => {

        hero.style.transition = "1.5s";

        hero.style.opacity = "1";

        hero.style.transform = "translateY(0)";

    }, 300);

});