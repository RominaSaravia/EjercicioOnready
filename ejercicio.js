let DatosAutos = [
  {
    marca: "Peugeot",
    modelo: "206",
    puertas: 4,
    precio: "200.000,00"
  },
  {
    marca: "Honda",
    modelo: "Titan",
    cilindrada: "125cc",
    precio: "60.000,00"
  },
  {
    marca: "Peugeot",
    modelo: "208",
    puertas: 5,
    precio: "250.000,00"
  },
  {
    marca: "Yamaha ",
    modelo: "YBR",
    cilindrada: "160cc",
    precio: "80.500,50"
  }
]
let objListAutos = [];

let vehiculo = function (DatosAutos) {
  this.marca = DatosAutos.marca;
  this.modelo = DatosAutos.modelo;
  this.cilindrada = DatosAutos.cilindrada;
  this.precio = DatosAutos.precio;
}


//Clase auto
let auto = function (DatosAutos) {
  vehiculo.call(this, DatosAutos)

  this.puertas = DatosAutos.puertas;

  this.getMarcaYModelo = () => {
    return `${this.marca} ${this.modelo}`;
  }

  this.getPrecio = () => {
    return this.precio;
  }

  //Devuelve el precio como float
  this.getFloatPrecio = () => {
    return parseFloat(this.precio.replace(".", "").replace(",", "."));
  };

  
  this.showDetails = () => {
    return `Marca: ${this.marca} // Modelo: ${this.modelo} ${this.puertas ? "// Puertas: " + this.puertas : ""} ${( this.cilindrada ? "// Cilindrara: " + this.cilindrada : "")} // Precio: $${this.getPrecio()}`

  }


}

auto.prototype = Object.create(vehiculo.prototype);

auto.prototype.constructor = auto;

//Se crean los objetos auto
for (i = 0; i < DatosAutos.length; i++) {
  objListAutos.push(new auto(DatosAutos[i]));

}

//Muestra toda la lista objListAutos
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
  console.log(`Vehículo más caro: ${listaOrdenada[0].marca} ${listaOrdenada[0].modelo}`);
  console.log(`Vehículo más barato: ${listaOrdenada[listaOrdenada.length - 1].marca} ${listaOrdenada[listaOrdenada.length - 1].modelo}`);
  console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${buscarY.marca} ${buscarY.modelo} $${buscarY.getPrecio()}`);
  console.log("========================================");

  mostrarListaOrdenada();

}

comparativa();