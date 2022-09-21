import countdown from "./cuentaRegresiva.js";
import hamburgerMenu from "./menuHamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { shortCuts } from "./teclado.js";
import { moveBall } from "./teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    /* Para ejecutar el menu hamburguesa */
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    
    /* Para ejecutar el reloj digital */
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");

    /* Para ejecutar la alarma */
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");

    countdown(
        "countdown", 
        "Sep 20,2022 19:19:00", 
        "feliz cumpleaños amigo y docente digital 🤓"
        );
});

//El teclado tiene 3 eventos: keydown cuando oprimimos una tecla, keypress mientras tengamos oprimida una tecla y keyup cuando se deja de oprimir una tecla, es decir, cuando soltamos la tecla.
d.addEventListener("keydown", e => {
    shortCuts(e);
    moveBall(e, ".ball", ".stage");
})