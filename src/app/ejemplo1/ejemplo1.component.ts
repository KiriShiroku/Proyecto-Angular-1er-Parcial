import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo1',
  imports: [],
  templateUrl: './ejemplo1.component.html'
})
export class Ejemplo1Component {

  //propiedades 
  nombre = 'Francisco';
  aniosServicio = 20;
  email = 'franciscogr.ti22@utsjr.edu.mx'
  activo = true;
  alumnos = [24,25,26];
  contador = 0;
  desactivarBoton = true;

  // Funcion que muestra un mensaje dependiendo del valor de la propiedad activa 
  estaActivo(){
    if (this.activo){
      return 'Empleado activo';
    }else {
        return 'Empleado inactivo';
      }
    }

  // metodo que suma los valores del arreglo de alumnos 
  sumarAlumnos(){
    let suma = 0;
    for (let i=0; i<this.alumnos.length;i++){
      suma += this.alumnos[i];
    }
    return suma;
  }



  productos = [
    {
      id: 1,
      descripcion: 'Gansito Marinela',
      precio: 15.50    
    },
    {
      id: 2,
      descripcion: 'Pinguinos Marinela',
      precio: 18    
    },
    {
      id: 2,
      descripcion: 'Nito',
      precio: 12   
    }
  ]


  //funcion que genera un numero aleatorio entre 1 y 3
  generarNumero(){
    return Math.floor(Math.random()*5)+1;
  }

  //funcion para incrementar el contador
  incrementarContador() {
    this.contador++;
  }

  //funcion para decrementar el contador
  decrementarContador(){
    this.contador--;
  }


//funcion que cambia el valor de desactivar boton
cambiarValor() {
  this.desactivarBoton= false;
}
}
