import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocheComponent } from './components/coche/coche.component';
import { FormularioCochesComponent } from './Components/formulario-coches/formulario-coches.component';

const routes: Routes = [
  {path:'coches',component: CocheComponent},
  {path:'formulario',component: FormularioCochesComponent},
  { path: '', redirectTo: '/coches', pathMatch: 'full' },
  { path: '**', redirectTo: '/coches' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
