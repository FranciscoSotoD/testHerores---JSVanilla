

export class Heroe {
    constructor(nombre, combate, imagen) {
        this.nombre = nombre;
        this.combate = combate;
        this.imagen = imagen;
    }
}
let peleadorUno;
let peleadorDos;

const luchadorUno = ( { name,  powerstats: { combat }, images: { md } } ) => {
    console.log( `${name} - ${combat}`);

    const divJugadorUnoPelear = document.querySelector('.jugadorUnoPelear');

    const divLuchador = document.createElement('div');
    // divLuchador.classList.add('luchador', 'marginCeroAuto');
    divLuchador.classList.add('luchador', 'marginCeroAuto');

    const h3 = document.createElement('h3');
    h3.textContent = `${name}`;
    h3.classList.add('text-center');

    const imgLuchador = document.createElement('img');
    imgLuchador.classList.add('imgLuchador');
    imgLuchador.src = `${md}`;

    divJugadorUnoPelear.appendChild(divLuchador);
    divLuchador.appendChild(h3);
    divLuchador.appendChild(imgLuchador);

    peleadorUno = new Heroe( name, combat, md );
    
}

const luchadorDos = ( { name,  powerstats: { combat }, images: { md } } ) => {
    console.log( `${name} - ${combat}`);

    const divJugadorDosPelear = document.querySelector('.jugadorDosPelear');

    const divLuchador = document.createElement('div');
    divLuchador.classList.add('luchador', 'marginCeroAuto');

    const h3 = document.createElement('h3');
    h3.textContent = `${name}`;
    h3.classList.add('text-center');

    const imgLuchador = document.createElement('img');
    imgLuchador.classList.add('imgLuchador');
    imgLuchador.src = `${md}`;

    divJugadorDosPelear.appendChild(divLuchador);
    divLuchador.appendChild(h3);
    divLuchador.appendChild(imgLuchador);
    
    peleadorDos = new Heroe( name, combat, md );

    mensajeVs();
}

function mensajeVs() {

    const parentElement = document.querySelector('.contenedorGrid');
    const divJugadorDosPelear = document.querySelector('.jugadorDosPelear');

    const divMensaje = document.createElement('div');
    divMensaje.classList.add('centrarVs');

    const mensajeVs = document.createElement('h3');
    mensajeVs.textContent = "VS";  
    mensajeVs.classList.add('centrarVs');

    const btnPelear = document.createElement('btn');
    btnPelear.classList.add('btnSeleccionar');
    btnPelear.textContent = "¡PELEAR!";
    btnPelear.id = "btnPelear";
    btnPelear.onclick = pelear;
    
    divMensaje.appendChild(mensajeVs);
    divMensaje.appendChild(btnPelear);
    parentElement.insertBefore(divMensaje, divJugadorDosPelear);
}

function pelear() {
    const h2JugadorUno = document.querySelector('.jugadorUnoPelear h2');
    h2JugadorUno.remove();
    const h2JugadorDos = document.querySelector('.jugadorDosPelear h2');
    h2JugadorDos.remove();
    const btnPelear = document.querySelector('#btnPelear');
    btnPelear.remove();

    const divContenedorGrid = document.querySelector('.contenedorGrid');
    divContenedorGrid.classList.add('marginTop100');

    barraVidaJugadorUno();
    barraVidaJugadorDos();

    btnJugadorUnoGolpear();
    btnJugadorDosGolpear();

}

function barraVidaJugadorUno() {
    // Barra de vida del jugador Uno
    const divJugadorUnoPelear = document.querySelector('.jugadorUnoPelear');
    const vidaBarra = document.createElement('div');
    vidaBarra.classList.add('vidaBarra', 'marginArriba10');
    vidaBarra.innerHTML = `
        <div class="progress" style="height: 30px">
            <div id="vidaJugadorUno" class="progress-bar bg-success"  role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="500">500%</div>
        </div>
    `;
    divJugadorUnoPelear.appendChild(vidaBarra);
}
function barraVidaJugadorDos() {
    // Barra de vida del jugador Uno
    const divJugadorDosPelear = document.querySelector('.jugadorDosPelear');
    const vidaBarra = document.createElement('div');
    vidaBarra.classList.add('vidaBarra', 'marginArriba10');
    vidaBarra.innerHTML = `
        <div class="progress" style="height: 30px">
            <div id="vidaJugadorDos" class="progress-bar bg-success" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
        </div>
    `;
    divJugadorDosPelear.appendChild(vidaBarra);
}
function btnJugadorUnoGolpear() {
    const divJugadorUnoPelear = document.querySelector('.jugadorUnoPelear');

    const btnGolpear = document.createElement('div');
    btnGolpear.classList.add('marginArriba10');
    btnGolpear.innerHTML = `
        <div class="d-grid gap-2">
            <button id="btnGolpearJugadorUno" class="btn btn-primary" type="button">Golpear</button>
        </div>
    `;
    divJugadorUnoPelear.appendChild(btnGolpear);

    btnGolpear.onclick = golpearJugadorDos;

}

function golpearJugadorDos() {
    console.log('golpeando jugador Dos');
    console.log(peleadorUno);
    
    const vidaBarraJugadorDos = document.querySelector('#vidaJugadorDos');
    const vidaActual = parseInt(vidaBarraJugadorDos.style.width) - (peleadorUno.combate/10);
    console.log(vidaActual);
    vidaBarraJugadorDos.style.width = `${vidaActual}%`;
    vidaBarraJugadorDos.textContent = `${vidaActual}%`;
    vidaBarraJugadorDos.ariaValueNow = `${vidaActual}%`;

    console.log(vidaBarraJugadorDos);
    if( vidaActual <= 1 ) {
        vidaBarraJugadorDos.style.width = `${0}%`;
        console.warn('GANASTE!');
        console.log(vidaBarraJugadorDos);
        const btnGolpear = document.querySelector('#btnGolpearJugadorUno');
        btnGolpear.disabled = true;
        setTimeout(() => {
            alert(`¡${peleadorUno.nombre} HA GANADO!`);
            window.location.href = "index.html";
        }, 1000);
        return;
    }

}

function btnJugadorDosGolpear() {
    const divJugadorDosPelear = document.querySelector('.jugadorDosPelear');

    const btnGolpear = document.createElement('div');
    btnGolpear.classList.add('marginArriba10');
    btnGolpear.innerHTML = `
        <div class="d-grid gap-2">
            <button id="btnGolpearJugadorDos" class="btn btn-primary" type="button">Golpear</button>
        </div>
    `;

    divJugadorDosPelear.appendChild(btnGolpear);

    btnGolpear.onclick = golpearJugadorUno;
}

function golpearJugadorUno() {
    console.log('golpeando jugador Uno');
    console.log(peleadorDos);
    
    const vidaBarraJugadorUno = document.querySelector('#vidaJugadorUno');
    const vidaActual = parseInt(vidaBarraJugadorUno.style.width) - (peleadorDos.combate/10);
    console.log(vidaActual);
    vidaBarraJugadorUno.style.width = `${vidaActual}%`;
    vidaBarraJugadorUno.textContent = `${vidaActual}%`;
    vidaBarraJugadorUno.ariaValueNow = `${vidaActual}%`;

    console.log(vidaBarraJugadorUno);
    if( vidaActual <= 1 ) {
        vidaBarraJugadorUno.style.width = `${0}%`;
        console.warn('GANASTE!');
        console.log(vidaBarraJugadorUno);
        const btnGolpear = document.querySelector('#btnGolpearJugadorDos');
        btnGolpear.disabled = true;
        setTimeout(() => {
            alert(`¡${peleadorDos.nombre} HA GANADO!`);
            window.location.href = "index.html";
        }, 1000);
        return;
    }

}

export {
    luchadorUno,
    luchadorDos
}