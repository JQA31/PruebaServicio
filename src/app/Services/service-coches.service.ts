import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceCochesService {

  constructor() { }

  public coches: Array<{id: number, marca: string, modelo: string, precio: number, imagen: string}> = [
    {id: 1, marca: 'Toyota', modelo: 'Corolla', precio: 25000, imagen: '../../assets/imgs/corolla.jpg'},
    {id: 2, marca: 'Ford', modelo: 'Mustang', precio: 55000, imagen: '../../assets/imgs/mustang.jpg'},
    {id: 3, marca: 'Chevrolet', modelo: 'Camaro', precio: 50000, imagen: '../../assets/imgs/camaro.jpg'},
    {id: 4, marca: 'Honda', modelo: 'Civic', precio: 28000, imagen: '../../assets/imgs/civic.jpg'},
    {id: 5, marca: 'BMW', modelo: 'M3', precio: 80000, imagen: '../../assets/imgs/m3.jpg'},
    {id: 6, marca: 'Mercedes-Benz', modelo: 'C-Class', precio: 45000, imagen: '../../assets/imgs/c-class.jpg'},
    {id: 7, marca: 'Audi', modelo: 'A4', precio: 42000, imagen: '../../assets/imgs/a4.jpg'},
    {id: 8, marca: 'Volkswagen', modelo: 'Golf GTI', precio: 35000, imagen: '../../assets/imgs/golf.jpg'},
    {id: 9, marca: 'Nissan', modelo: 'GT-R', precio: 115000, imagen: '../../assets/imgs/gtr.jpg'},
    {id: 10, marca: 'Porsche', modelo: '911 Carrera', precio: 120000, imagen: '../../assets/imgs/911carrera.jpg'},
    {id: 11, marca: 'Ferrari', modelo: '488 GTB', precio: 250000, imagen: '../../assets/imgs/488gtb.jpg'},
    {id: 12, marca: 'Lamborghini', modelo: 'Huracán', precio: 210000, imagen: '../../assets/imgs/huracan.jpg'},
    {id: 13, marca: 'McLaren', modelo: '720S', precio: 300000, imagen: '../../assets/imgs/720s.jpg'},
    {id: 14, marca: 'Aston Martin', modelo: 'Vantage', precio: 150000, imagen: '../../assets/imgs/vantage.jpg'},
    {id: 15, marca: 'Jaguar', modelo: 'F-Type', precio: 75000, imagen: '../../assets/imgs/F-type.jpg'},
    {id: 16, marca: 'Subaru', modelo: 'WRX STI', precio: 40000, imagen: '../../assets/imgs/subaru.jpg'}
  ];

  retornarCoches(){
    return this.coches;
  }

  addCoche(marca: string, modelo: string, precio: number, imagen: string){
    const nuevoCoche = {
      id: this.coches.length+1,
      marca: marca,
      modelo: modelo,
      precio: precio,
      imagen: imagen
    };
    this.coches.push(nuevoCoche);
  }

  eliminarCoche(modelo: string){
    this.coches = this.coches.filter(coche => coche.modelo !== modelo);
  }

  modificarCoche(marca: string, modelo: string, precio: number, imagen: string){
    const id = this.coches.findIndex(coche => coche.modelo === modelo);
    if (id !== -1) {
      this.coches[id] = { id, marca, modelo, precio, imagen };
    }
  }



}
