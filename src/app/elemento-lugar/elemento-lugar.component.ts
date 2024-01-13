import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Lugar } from '../modelos/lugar.interface';
import { LugarService } from '../servicios/lugar.service';

@Component({
  selector: 'app-elemento-lugar',
  standalone: true,
  imports: [],
  templateUrl: './elemento-lugar.component.html',
  styleUrl: './elemento-lugar.component.css'
})
export class ElementoLugarComponent {

  private lugarService: LugarService = inject(LugarService);
  
  // con el decorador input indico que el lugar es un elemento de entrada
  @Input() item!: Lugar;  // indico que no es necesaria la inicialización de atributos con el !

  @Output() cambioItem: EventEmitter<Lugar> = new EventEmitter<Lugar>(); // los outputs son eventos que ocurren que deseo reportar
  marcarVisitado() {
    this.lugarService.marcarVisitado(this.item );
    this.cambioItem.emit(this.item)
  }
}
