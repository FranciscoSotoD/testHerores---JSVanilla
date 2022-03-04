import { mostrarHtmlHeroes } from './heroes.js';

const obtenerDatos = async() => {
    const url = 'https://akabab.github.io/superhero-api/api/all.json';

    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        mostrarHtmlHeroes(resultado);
    } catch (error) {
        console.log(error);   
    }
}
const obtenerId = async(id) => {
    const url = `https://akabab.github.io/superhero-api/api/id/${id}.json`;

    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        // console.log(resultado);
        return resultado;
    } catch (error) {
        console.log(error);   
    }
}

export {
    obtenerDatos,
    obtenerId
}
