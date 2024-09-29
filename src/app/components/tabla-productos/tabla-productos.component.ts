import { Component, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-productos',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './tabla-productos.component.html',
  styleUrl: './tabla-productos.component.css'
})
export class TablaProductosComponent {
  servicio = inject(ProductosService);

  ropa: any;
  anio = "";

  modoNocturno: boolean = false;
  vistaGaleria: boolean = true;
  modoEspanol: boolean = true;

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
  cambiarModo() {

    this.modoNocturno = !this.modoNocturno;
    this.vistaGaleria = !this.vistaGaleria;
    this.modoEspanol = !this.modoEspanol;
  }

   filtrarPorColor(ropa: any[], color: string): any[] {
    if (!ropa || !color) {
      return ropa;
    }
    return ropa.filter(item => item.color.toLowerCase() === color.toLowerCase());
  }

   trackByFn(index: number, item: any) {
    return item.id;
  }
}

