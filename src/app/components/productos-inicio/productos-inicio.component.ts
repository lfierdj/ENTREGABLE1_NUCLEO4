import { Component, inject, Inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos-inicio',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './productos-inicio.component.html',
  styleUrl: './productos-inicio.component.css'
})
export class ProductosInicioComponent {
  servicio = inject(ProductosService);

  ropa: any;

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

