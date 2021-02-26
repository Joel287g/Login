var log = console.log;

// Index.html

function cambiarModo() {
    const body = document.getElementById("body")
    const navbar = document.getElementById("navbar")
    const asideLeft = document.getElementById("aside-left")
    const section = document.getElementById("section")
    const asideLeftA = document.getElementById("dark-a-section")
    const footer = document.getElementById("footer")
    const footerA = document.getElementById("dark-a-footer")
    const button = document.getElementById("button")

    body.classList.toggle("body-dark")
    navbar.classList.toggle("navbar-dark")
    asideLeft.classList.toggle("aside-dark")
    section.classList.toggle("section-dark")
    asideLeftA.classList.toggle("aside-a-dark")
    footer.classList.toggle("footer-dark")
    footerA.classList.toggle("footer-a-dark")

    if(button.classList.contains("activo")){
        button.style.color = "#fff"
        button.style.borderColor = "#fff"
        button.classList.replace("activo", "noActivo")
    }
    else{
        button.style.color = "#000"
        button.style.borderColor = "#000"
        button.classList.replace("noActivo", "activo")
    }
}

function cambiarImagen() {
    const lightMode = document.querySelector("#light-mode");
    const darkMode = document.querySelector("#dark-mode");

    if (lightMode.classList.contains("visible")) {
        lightMode.classList.replace("visible", "invisible");
        darkMode.classList.replace("invisible", "visible");
    } else {
        lightMode.classList.replace("invisible", "visible");
        darkMode.classList.replace("visible", "invisible");
    }
}

// Index.html

// Registro.html

const checkbox = document.getElementById("checkbox")
const divDoctor = document.getElementById("div-doctor")
const registerBox = document.getElementById("register-box")

function mostrarContenido(){
    if(checkbox.checked){
        divDoctor.style.display = "block"
        registerBox.style.height = "800px";
    }
    else{
        divDoctor.style.display = "none"
        registerBox.style.height = "560px";
    }
}

// Registro.html