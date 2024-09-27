import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-productos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './detalles-productos.component.html',
  styleUrl: './detalles-productos.component.css'
})
export class DetallesProductosComponent {
servicio = inject (ProductosService)
router = inject (ActivatedRoute)

productos : any

ngOnInit(){
  this.router.params.subscribe(id=>{
    this.servicio.getRopaUnica(id['idProductos']).subscribe(a=>{
      this.productos = a
    })
  })
}
}
