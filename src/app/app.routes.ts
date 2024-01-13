import { Routes } from '@angular/router';
import { ListaLugaresComponent } from './lista-lugares/lista-lugares.component';
import { FormularioComponent } from './formulario/formulario.component';

//uso de rutas para navegar entre componentes
export const routes: Routes = [
    {
        path: '',
        component: ListaLugaresComponent
    },

    {
        path: 'agregar',
        component: FormularioComponent
    }
];
