import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceCochesService {

  constructor() { }

  public coches:Array<{marca:string, modelo:string, velocidad:number}> = [
    {
      marca:"BMW", modelo:"M3", velocidad:250
    },
    {
      marca:"Mercedes", modelo:"AMG",  velocidad:300
    },
    {
      marca:"Audi", modelo:"RS8",  velocidad:280
    }
  ]

  public retornarCoches(){
    return this.coches;
  }

}
