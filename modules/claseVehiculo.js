let vehiculo = function (DatosAutos) {
  this.marca = DatosAutos.marca;
  this.modelo = DatosAutos.modelo;
  this.cilindrada = DatosAutos.cilindrada;
  this.precio = DatosAutos.precio;
  this.puertas = DatosAutos.puertas;
}

module.exports = vehiculo;