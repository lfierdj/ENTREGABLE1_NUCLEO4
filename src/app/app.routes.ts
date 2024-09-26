import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { Error404Component } from './components/error-404/error-404.component';

export const routes: Routes = [
  {path: '',redirectTo:'Inicio',pathMatch:'full'},
    {path:"Inicio", component:InicioComponent},
    {path:"Informacion", component:InformacionComponent},
    {path:"Contactos", component:ContactosComponent},

    {path: '**', component: Error404Component},
];
