const d = document;

export function digitalClock(clock, btnPlay, btnStop){
    let clockTempo;

    d.addEventListener("click", e =>{
        //Para iniciar el reloj
        if(e.target.matches(btnPlay)){
            clockTempo = setInterval(() =>{
                let clockHour = new Date().toLocaleTimeString();//.toLocaleTimeString() permite imprimir un reloj digital
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000)
            
            //Para deshabilitar el boton
            e.target.disabled = true;
        }
        
        //Para detener el reloj
        if(e.target.matches(btnStop)){
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;//Para limpiar o desaparecer el reloj
            
            //Para deshabilitar el boton
            d.querySelector(btnPlay).disabled = false;
        }
    })
}


export function alarm(sound, btnPlay, btnStop){
    let alarmTempo;
    //Creamos dinamicamente desde Javascript la etiqueta audio de HTML
    const $alarm = d.createElement("audio");
    $alarm.src = sound;

    d.addEventListener("click", e => {
        if(e.target.matches(btnPlay)){
            alarmTempo = setTimeout(() =>{
                $alarm.play();
            },1000)

            //Para deshabilitar el boton
            e.target.disabled = true;
        }

        if(e.target.matches(btnStop)){
            clearTimeout(alarmTempo);
            $alarm.pause();
            $alarm.currentTime = 0;
            d.querySelector(btnPlay).disabled = false;
        }
    })
}

