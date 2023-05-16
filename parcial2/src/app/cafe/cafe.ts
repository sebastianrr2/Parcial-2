export class Cafe {

  id: number;
  nombre: string;
  tipo: string;
  sabor: string;
  altura: number;
  imagen: string;

  constructor(id: number, nombre: string, tipo: string, sabor: string, altura: number, imagen: string) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.sabor = sabor;
    this.altura = altura;
    this.imagen = imagen;
  }
}
