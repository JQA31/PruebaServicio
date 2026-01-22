import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocheComponent } from './components/coche/coche.component';
import { FormsModule } from '@angular/forms';
import { FormularioCochesComponent } from './Components/formulario-coches/formulario-coches.component';

@NgModule({
  declarations: [
    AppComponent,
    CocheComponent,
    FormularioCochesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
