const claseVehiculo = require('./claseVehiculo');

//Clase auto
let auto = function (DatosAutos) {
  claseVehiculo.call(this, DatosAutos);

  this.getModelo = () => {
    return this.modelo;
  };

  this.getMarca = () => {
    return this.marca;
  };

  this.getMarcaYModelo = () => {
    return `${this.marca} ${this.modelo}`;
  };

  this.getPrecio = () => {
    return `$${this.precio}`;
  };

  //Devuelve el precio como float
  this.getFloatPrecio = () => {
    return parseFloat(this.precio.replace(".", "").replace(",", "."));
  };

  this.getCilindrada = () => {
    if(this.cilindrada) {
      return `// Cilindrada: ${this.cilindrada}`
    }else {
      return ""
    }

  };

  this.getPuertas = () => {
    if(this.puertas) {
      return `// Puertas: ${this.puertas}`
    }else {
      return ""
    }
  };

  
  this.showDetails = () => {
    return `Marca: ${this.getMarca()} // Modelo: ${this.getModelo()} ${this.getPuertas()} ${this.getCilindrada()} // Precio: ${this.getPrecio()}`

  };


}

auto.prototype = Object.create(claseVehiculo.prototype);

auto.prototype.constructor = auto;

module.exports = auto;