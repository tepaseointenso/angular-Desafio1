var madrid = {
    nombre: "Real Madrid",
    ciudad: "Madrid",
    estadio: "Santiago Bernabeu",
    colores: ["Blanco", "Negro"],
    puntos: 46
};
var barcelona = {
    nombre: "FC Barcelona",
    ciudad: "Barcelona",
    estadio: "Camp Nou",
    colores: ["Granate", "Azul"],
    puntos: 43
};
var laLiga = {
    nombre: "laliga Santander",
    pais: "España",
    equipos: [],
    divisiones: 2
};
laLiga.equipos.push(madrid);
laLiga.equipos.push(barcelona);
console.log(laLiga.equipos);
