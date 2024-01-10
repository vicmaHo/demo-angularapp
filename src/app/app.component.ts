import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListaLugaresComponent } from './lista-lugares/lista-lugares.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListaLugaresComponent], //hago los imports de los componentes
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Victor Manuel Hernandez';
  hola = "Hola Mundo!!"
}
