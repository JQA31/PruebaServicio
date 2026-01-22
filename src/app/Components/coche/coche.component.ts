import { Component, OnInit } from '@angular/core';
import { ServiceCochesService } from 'src/app/Services/service-coches.service';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit{

  constructor(private serviceCoches: ServiceCochesService){}
  public coches:Array<any> = [];

  marca: string = "";
  precio: number = 0;
  modelo: string = "";
  imagen: string = "";

  ngOnInit(): void {
    this.coches = this.serviceCoches.retornarCoches();
  }

  mostrarCochesConsola(){
    console.log(this.serviceCoches.retornarCoches());
  }

  mostrarCoches(){
    return this.serviceCoches.retornarCoches();
  }

  addCoche(){
    if(this.marca.length > 2 && this.precio > 5){
      this.serviceCoches.addCoche(this.marca,this.modelo,this.precio,this.imagen);
    }
  }

  eliminarCoche(modelo: string){
    this.serviceCoches.eliminarCoche(modelo);
  }

  modificarCoche(modelo: string) {
    this.serviceCoches.modificarCoche(this.marca, this.modelo, this.precio, this.imagen);
  }

}
