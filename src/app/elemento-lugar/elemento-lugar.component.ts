import { Component, Input } from '@angular/core';
import { Lugar } from '../modelos/lugar.interface';

@Component({
  selector: 'app-elemento-lugar',
  standalone: true,
  imports: [],
  templateUrl: './elemento-lugar.component.html',
  styleUrl: './elemento-lugar.component.css'
})
export class ElementoLugarComponent {

  // con el decorador input indico que el lugar es un elemento de entrada
  @Input() item: Lugar = {
    nombre: "",
    imagen: "",
    categorias: []
  };

}
