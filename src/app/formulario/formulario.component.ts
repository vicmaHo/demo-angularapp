import { LowerCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Lugar } from '../modelos/lugar.interface';
import { LugarService } from '../servicios/lugar.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [LowerCasePipe, FormsModule, RouterLink], // uso de un pipe modificador para convertir los datos de salida a minuscula
  // el modulo de formulario permite interactuar entre componentes de formulario y elementos del controlador
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {
  categorias: string[] = [
    "Cultura",
    "Ocio",
    "Playa"
  ];

  private lugarService: LugarService = inject(LugarService); // inyeecion de dependencias para el servicio de lugar
  private router: Router = inject(Router);

  titulo: string = "";

  url_imagen: string = "";

  descripcion: string = "";

  datos_categoria: boolean[] = [false, false, false];

  agregarLugar(){
    const lugar: Lugar = {
      nombre: this.titulo,
      imagen: this.url_imagen,
      descripcion: this.descripcion,
      categorias: [],
      visitado: false
    };


    for (let index = 0; index < this.datos_categoria.length; index++) {
      if (this.datos_categoria[index]) {
        lugar.categorias.push(this.categorias[index]);
      }
      
    }


    this.lugarService.agregarLugar(lugar);
    this.router.navigateByUrl("/");
  }
}
