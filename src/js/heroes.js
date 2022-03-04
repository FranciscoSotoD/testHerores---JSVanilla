import { obtenerDatos, obtenerId } from './http-provider.js';
import { luchadorDos, luchadorUno } from './combate.js';

obtenerDatos();

export function mostrarHtmlHeroes( data ) {
    // console.log(data);
    // console.log(data[5].id);

    // D O M   S C R I P T I N G
    const contenedorGrid = document.querySelector('.contenedorGrid');

    // JUGADOR UNO
    // div jugador
    const divJugadorUno = document.createElement('div');
    divJugadorUno.classList.add('jugador', 'jugadorUnoPelear');

    // h2 para el div jugador
    const h2JugadorUno = document.createElement('h2'); 
    h2JugadorUno.textContent = "Jugador uno";
    h2JugadorUno.classList.add('text-center');

    // jugador grid para el div de jugador
    const divJugadorGrid = document.createElement('div');
    divJugadorGrid.classList.add('jugadorGrid', 'jugadorUno');

    contenedorGrid.appendChild(divJugadorUno);
    divJugadorUno.appendChild(h2JugadorUno);
    divJugadorUno.appendChild(divJugadorGrid);

    // JUGADOR DOS
    // div jugador
    const divJugadorDos = document.createElement('div');
    divJugadorDos.classList.add('jugador', 'jugadorDosPelear');

    // h2 para el div jugador
    const h2JugadorDos = document.createElement('h2'); 
    h2JugadorDos.textContent = "Jugador Dos";
    h2JugadorDos.classList.add('text-center');

    // jugador grid para el div de jugador
    const divJugadorGridDos = document.createElement('div');
    divJugadorGridDos.classList.add('jugadorGrid', 'jugadorDos');

    contenedorGrid.appendChild(divJugadorDos);
    divJugadorDos.appendChild(h2JugadorDos);
    divJugadorDos.appendChild(divJugadorGridDos);

    data.forEach( (e) => {
        const { id, name, biography: { firstAppearance }, images: { md }  } = e; 
        // console.log(id, name, firstAppearance, md);
        // console.log(`${e.id} - ${e.name} - ${e['biography']['firstAppearance'] } `);
        
        // ELEMENTOS DEL JUGADOR 1
        // div del luchador que va dentro de jugador grid
        const divLuchador = document.createElement('div');
        divLuchador.classList.add('luchador');
    
        // h3 que va dentro div luchador
        const h3Luchador = document.createElement('h3');
        h3Luchador.textContent = `${name}`;
        h3Luchador.classList.add('text-center');
    
        // <p> Apariencia que va dentro del div luchador
        const pApariencia = document.createElement('p');
        pApariencia.textContent = `${firstAppearance}`;
    
        // imagen que va dentro del div luchador
        const imgLuchador = document.createElement('img');
        imgLuchador.src = `${md}`;
        imgLuchador.classList.add('imgLuchador');
    
        // btn de seleccionar que va dentro de div luchador
        const btnSeleccionar = document.createElement('btn');
        btnSeleccionar.classList.add('btnSeleccionar');
        btnSeleccionar.textContent = "Seleccionar";
        btnSeleccionar.dataset.id = `${id}`;

        divJugadorGrid.append(divLuchador);
    
        divLuchador.appendChild(h3Luchador);
        divLuchador.appendChild(pApariencia);
        divLuchador.appendChild(imgLuchador);
        divLuchador.appendChild(btnSeleccionar);

        const heroeSeleccionado = document.querySelector('.jugadorUno');
        heroeSeleccionado.addEventListener('click', seleccionarHeoreUno);
    } );

    data.forEach( (e) => {
        const { id, name, biography: { firstAppearance }, images: { md }  } = e; 
        // console.log(id, name, firstAppearance, md);
        
        // ELEMENTOS DEL JUGADOR 2
        // div del luchador que va dentro de jugador grid
        const divLuchador = document.createElement('div');
        divLuchador.classList.add('luchador');
    
        // h3 que va dentro div luchador
        const h3Luchador = document.createElement('h3');
        h3Luchador.textContent = `${name}`;
        h3Luchador.classList.add('text-center');
    
        // <p> Apariencia que va dentro del div luchador
        const pApariencia = document.createElement('p');
        pApariencia.textContent = `${firstAppearance}`;
    
        // imagen que va dentro del div luchador
        const imgLuchador = document.createElement('img');
        imgLuchador.src = `${md}`;
        imgLuchador.classList.add('imgLuchador');
    
        // btn de seleccionar que va dentro de div luchador
        const btnSeleccionar = document.createElement('btn');
        btnSeleccionar.classList.add('btnSeleccionar');
        btnSeleccionar.textContent = "Seleccionar";
        btnSeleccionar.dataset.id = `${id}`;
    

        divJugadorGridDos.append(divLuchador);
    
        divLuchador.appendChild(h3Luchador);
        divLuchador.appendChild(pApariencia);
        divLuchador.appendChild(imgLuchador);
        divLuchador.appendChild(btnSeleccionar);

        const heroeSeleccionado = document.querySelector('.jugadorDos');
        heroeSeleccionado.addEventListener('click', seleccionarHeoreDos);
    } );
    

}

function seleccionarHeoreUno(e) {
    if(e.target.classList.contains('btnSeleccionar')) {
        // console.log('clickkk');
        const heoreId =  parseInt(e.target.dataset.id);
        // console.log(heoreId);
        obtenerId(heoreId)
            .then( h => {
                // const { name,  powerstats: { combat } } = h;
                // console.log(name, combat);

                
                const jugadorUno = document.querySelector('.jugadorUno');
                jugadorUno.remove();
                
                // Funcion para mandarle los datos del heroe seleccionado
                luchadorUno( h );
            });
        }    
}
function seleccionarHeoreDos(e) {
    if(e.target.classList.contains('btnSeleccionar')) {
        // console.log('clickkk');
        const heoreId =  parseInt(e.target.dataset.id);
        // console.log(heoreId);
        obtenerId(heoreId)
            .then( h => {
                // const { name,  powerstats: { combat } } = h;
                // console.log(name, combat);

                const jugadorDos = document.querySelector('.jugadorDos');
                jugadorDos.remove();
                
                luchadorDos( h );
            });
        }    
}