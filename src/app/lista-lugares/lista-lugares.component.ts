import { Component, OnInit, inject } from '@angular/core';
import { ElementoLugarComponent } from '../elemento-lugar/elemento-lugar.component';
import { Lugar } from '../modelos/lugar.interface';
import { NgFor } from '@angular/common';
import { LugarService } from '../servicios/lugar.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-lugares', // es un alias para identificar el nombre de este componente
  standalone: true,
  imports: [ElementoLugarComponent, NgFor, RouterLink],
  templateUrl: './lista-lugares.component.html',
  styleUrl: './lista-lugares.component.css'
})
export class ListaLugaresComponent implements OnInit {

  
  //categorias: string[] = ["Cultura", "Ocio", "Playa"]
  
  private lugarService: LugarService = inject(LugarService);

  // lista de elementos de lugar
  lugares: Lugar[] = [];


  // la clase onInit define que sucedera cuando se inicialice este componente
  ngOnInit(): void {
    this.lugares = this.lugarService.listarLugares(); // cuando se inicialice el compoenente utiliza el servicio para traer la lista de lugares
  }

  itemCambio(lugar: Lugar){
    alert('Ha cambiado el elemento ' + lugar.nombre)
  }
 
}
