import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceCochesService } from 'src/app/Services/service-coches.service';
@Component({
  selector: 'app-formulario-coches',
  templateUrl: './formulario-coches.component.html',
  styleUrls: ['./formulario-coches.component.css']
})
export class FormularioCochesComponent {
  marca: string = "";
  precio: number = 0;
  modelo: string = "";
  imagen: string = "";
  id: number = Math.floor(Math.random() * 1000);

  constructor(
    private cocheService: ServiceCochesService,
    private router: Router
  ) {}

  addCoche() {
    //Guardamos en el servicio
    this.cocheService.addCoche(this.marca,this.modelo,this.precio,this.imagen);

    //Redirijimos a el grid de los coches
    this.router.navigate(['/coches']);
  }

  modificarCoche() {
    this.cocheService.modificarCoche(this.marca, this.modelo, this.precio, this.imagen);
    this.router.navigate(['/coches']);
  }

  eliminarCoche() {
    this.cocheService.eliminarCoche(this.modelo);
    this.router.navigate(['/coches']);
  }

}
