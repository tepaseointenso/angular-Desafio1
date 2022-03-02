interface EquipoInterface{
    nombre: string;
    ciudad: string;
    estadio: string;
    colores: string[];
    puntos: number;
}
interface LigaInterface{
    nombre: string;
    pais: string;
    equipos: EquipoInterface[];
    divisiones: number
}


let madrid: EquipoInterface = {
    nombre: "Real Madrid",
    ciudad: "Madrid",
    estadio: "Santiago Bernabeu",
    colores: ["Blanco", "Negro"],
    puntos: 46
}
let barcelona: EquipoInterface = {
    nombre: "FC Barcelona",
    ciudad: "Barcelona",
    estadio: "Camp Nou",
    colores: ["Granate", "Azul"],
    puntos: 43
}

let laLiga: LigaInterface = {
    nombre: "laliga Santander",
    pais: "España",
    equipos: [],
    divisiones: 2
}

laLiga.equipos.push(madrid);
laLiga.equipos.push(barcelona);

console.log(laLiga.equipos);