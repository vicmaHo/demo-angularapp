// las interfaces en typescript se usan para definir la estructura de un tipo de dato, cuales son los campos que pertenecen a un objeto
export interface Lugar {
    nombre: string;
    imagen: string;
    descripcion?: string; //? indica que este campo es opcional
    categorias: string[];
}

