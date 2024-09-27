import { Component } from '@angular/core';
import { DetallesProductosComponent } from '../../components/detalles-productos/detalles-productos.component';

@Component({
  selector: 'app-detalles-p',
  standalone: true,
  imports: [DetallesProductosComponent],
  templateUrl: './detalles-p.component.html',
  styleUrl: './detalles-p.component.css'
})
export class DetallesPComponent {

}
