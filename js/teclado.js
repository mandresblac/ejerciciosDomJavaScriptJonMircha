const d = document;

//variables que me permiten controlar el movimiento de la pelota
let x = 0,
y = 0;

export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball),
    $stage =d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();
    //console.log(e.keyCode); //keyCode muestra el código o número que el PC da a cada tecla
    //console.log(e.key); //key muestra el nombre de la letra que le da el navegador.
    //console.log(limitsBall, limitsStage);

    
    //Para mover la pelota
    switch (e.keyCode) {
        //Left
        case 37:
            if (limitsBall.left > limitsStage.left) {
                e.preventDefault();
                x--
            };
            break;
        //Up
        case 38:
            if (limitsBall.top > limitsStage.top) {
                e.preventDefault();
                y--;
            };
            break;
        //Right
        case 39:
            if (limitsBall.right < limitsStage.right) {
                e.preventDefault();
                x++
            };
            break;
        //Bottom
        case 40:
            if (limitsBall.bottom < limitsStage.bottom) {
                e.preventDefault();
                y++
            };
            break;

        default:
            break;
    }
    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shortCuts(e){
    //El teclado tiene 3 eventos: keydown cuando oprimimos una tecla, keypress mientras tengamos oprimida una tecla y keyup cuando se deja de oprimir una tecla, es decir, cuando soltamos la tecla.
    /* console.log(e.type);//type muestra el tipo de evento.
    console.log(e.key);//key muestra el nombre de la letra que le da el navegador.
    console.log(e.keyCode); //keyCode muestra el código o número que el PC da a cada tecla
    console.log(`ctrl: ${e.ctrlKey}`); //ctrlKey para activar la tecla ctrl
    console.log(`alt: ${e.altKey}`); //altKey para activar la tecla alt
    console.log(`shift: ${e.shiftKey}`); //shiftKey para activar la tecla shift
    console.log(e); */

    if (e.key === "a" && e.altKey) {
        alert("Haz lanzado una alerta con el teclado");
    };

    if (e.key === "c" && e.altKey) {
        confirm("Haz lanzado una confirmación con el teclado");
    };

    if (e.key === "p" && e.altKey) {
        prompt("Haz lanzado un aviso (o prompt) con el teclado");
    };
}
