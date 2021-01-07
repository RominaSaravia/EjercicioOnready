const claseAuto = require('./clases/claseAuto.js');
const DatosAutos = require('./listaAutos');


let objListAutos = [];


//Se crean los objetos auto
for (i = 0; i < DatosAutos.length; i++) {
  objListAutos.push(new claseAuto(DatosAutos[i]));

}

//Muestra en consola toda la lista objListAutos
for (let i in objListAutos) {
  console.log(objListAutos[i].showDetails());
}

function mostrarListaOrdenada() {
  console.log("Vehículos ordenados por precio de mayor a menor:");
  for (let i in listaOrdenada) {
    console.log(listaOrdenada[i].getMarcaYModelo());
  }
}

function comparativa() {
  //Lista Ordenada de mayor a menor
  listaOrdenada = objListAutos.sort(function (a, b) {
    if (a.getFloatPrecio() < b.getFloatPrecio()) {
      return 1;
    }
    if (a.getFloatPrecio() > b.getFloatPrecio()) {
      return -1;
    }
    return 0;

  });

  let buscarY = (objListAutos.find(e => e.modelo.includes("Y")));

  console.log("========================================");
  console.log(`Vehículo más caro: ${listaOrdenada[0].getMarcaYModelo()}`);
  console.log(`Vehículo más barato: ${listaOrdenada[listaOrdenada.length - 1].getMarcaYModelo()}`);
  console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${buscarY.getMarcaYModelo()} ${buscarY.getPrecio()}`);
  console.log("========================================");

  mostrarListaOrdenada();

}

comparativa();