import { Injectable } from '@angular/core';
import { Lugar } from '../modelos/lugar.interface';

@Injectable({
  providedIn: 'root'
})
export class LugarService {
  
  lugares: Lugar[] = [
    {
      nombre: "Parque de los nevados",
      imagen: "https://steambeach.com.co/cdn/shop/articles/bnn_blog_nevados.jpg?v=1563558482",
      descripcion: "El Parque Nacional Los Nevados se ubica en la región cafetera de los Andes centrales de Colombia. Es conocida por sus volcanes nevados, glaciares, lagos y bosques. El volcán activo Nevado del Ruiz se encuentra en el norte. Más al sur está el lago Verde de color esmeralda, el lago Otún lleno de truchas y el Nevado del Tolima con su cumbre cubierta de nieve. El parque alberga colibríes, águilas, loros y cóndores. Tiene altas palmas de cera y frailejones.",
      categorias: ["Ocio", "Paisaje", "Cultura"],
      visitado:  true
    },
    {
      nombre: "Las Dunas del Taroa",
      imagen: "https://i.pinimg.com/originals/9c/89/f5/9c89f588a147813eccbea49cf56d9961.jpg",
      descripcion: "En el desierto La Guajira, las dunas caen directamente al Caribe. Esta es la tierra del pueblo wayú, sudamericanos indígenas que subsisten a duras penas en este hostil ambiente mediante el pastoreo, el tejido y, generalmente, aguantando por cualquier medio que puedan.",
      categorias: ["Ocio", "Desierto"],
      visitado: false
    },
    {
      nombre: "Desierto de la Tatacoa",
      imagen: "https://d2r9epyceweg5n.cloudfront.net/stores/792/831/products/desierto-de-la-tatacoa_0009_capa-11-84e33020d6a208d94c15361748497161-1024-1024.jpg",
      categorias: ["Desierto", "Ocio"],
      visitado: false
    }
  ];

  constructor() { }


  listarLugares(): Lugar[] {
    return this.lugares;
  }

  agregarLugar(lugar: Lugar){
    this.lugares.push(lugar);
  }

  marcarVisitado(item: Lugar){
    item.visitado = true;
  }
}
