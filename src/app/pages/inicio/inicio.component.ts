import { Component } from '@angular/core';
import { ProductosInicioComponent } from "../../components/productos-inicio/productos-inicio.component";


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ProductosInicioComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
