import { Component } from '@angular/core';
import { TablaContactosComponent } from "../../components/tabla-contactos/tabla-contactos.component";

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [TablaContactosComponent],
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css'
})
export class ContactosComponent {

}
