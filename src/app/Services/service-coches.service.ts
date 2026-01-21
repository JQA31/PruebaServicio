import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceCochesService {

  constructor() { }

  public coches:Array<{marca:string, modelo:string, velocidad:number, imagen:string}> = [
    {marca: 'Toyota', modelo: 'Corolla', velocidad: 180, imagen: '../../assets/imgs/corolla.jpg'},
    {marca: 'Ford', modelo: 'Mustang', velocidad: 250, imagen: '../../assets/imgs/mustang.jpg'},
    {marca: 'Chevrolet', modelo: 'Camaro', velocidad: 240, imagen: '../../assets/imgs/camaro.jpg'},
    {marca: 'Honda', modelo: 'Civic', velocidad: 200, imagen: '../../assets/imgs/civic.jpg'},
    {marca: 'BMW', modelo: 'M3', velocidad: 280, imagen: '../../assets/imgs/m3.jpg'},
    {marca: 'Mercedes-Benz', modelo: 'C-Class', velocidad: 260, imagen: '../../assets/imgs/c-class.jpg'},
    {marca: 'Audi', modelo: 'A4', velocidad: 250, imagen: '../../assets/imgs/a4.jpg'},
    {marca: 'Volkswagen', modelo: 'Golf GTI', velocidad: 230, imagen: '../../assets/imgs/golf.jpg'},
    {marca: 'Nissan', modelo: 'GT-R', velocidad: 315, imagen: '../../assets/imgs/gtr.jpg'},
    {marca: 'Porsche', modelo: '911 Carrera', velocidad: 300, imagen: '../../assets/imgs/911carrera.jpg'},
    {marca: 'Ferrari', modelo: '488 GTB', velocidad: 330, imagen: '../../assets/imgs/488gtb.jpg'},
    {marca: 'Lamborghini', modelo: 'Huracán', velocidad: 325, imagen: '../../assets/imgs/huracan.jpg'},
    {marca: 'McLaren', modelo: '720S', velocidad: 340, imagen: '../../assets/imgs/720s.jpg'},
    {marca: 'Aston Martin', modelo: 'Vantage', velocidad: 310, imagen: '../../assets/imgs/vantage.jpg'},
    {marca: 'Jaguar', modelo: 'F-Type', velocidad: 300, imagen: '../../assets/imgs/F-type.jpg'},
    {marca: 'Subaru', modelo: 'WRX STI', velocidad: 260, imagen: '../../assets/imgs/subaru.jpg'},
  ]

  public retornarCoches(){
    return this.coches;
  }

}
