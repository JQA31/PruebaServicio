import { Component, OnInit } from '@angular/core';
import { ServiceCochesService } from 'src/app/Services/service-coches.service';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit{

  constructor(private _serviceCoches: ServiceCochesService){}
  public coches:Array<{marca:string, modelo:string, velocidad:number, imagen:string}> = [];

  ngOnInit(): void {
    this.coches = this._serviceCoches.retornarCoches();
  }

  mostrarCochesConsola(){
    console.log(this._serviceCoches.retornarCoches());
  }

  mostrarCoches(){
    return this._serviceCoches.retornarCoches();
  }
}
