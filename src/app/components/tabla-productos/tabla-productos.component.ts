import { Component, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla-productos',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './tabla-productos.component.html',
  styleUrl: './tabla-productos.component.css'
})
export class TablaProductosComponent {
  servicio = inject(ProductosService);

  ropa: any;
  anio = "";

  ngOnInit() {
    this.servicio.getRopa().subscribe((data) => {
      this.ropa = data;
    });
  }

  visualizar: any;
  ver(id: any) {
    this.visualizar = id;
  }

  busqueda: any;
}

