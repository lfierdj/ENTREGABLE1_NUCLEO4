import { Component } from '@angular/core';
import { TablaProductosComponent } from "../../components/tabla-productos/tabla-productos.component";


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [TablaProductosComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
