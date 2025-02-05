import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ejemplo3',
  imports: [FormsModule],
  templateUrl: './ejemplo3.component.html'
})
export class Ejemplo3Component {

  //PROPIEDADES
  producto = {
    id: 0,
    descripcion: '',
    precio: 0,
  };

  productos = [
    {id: 1,descripcion:'Gansito',precio:15},
    {id: 2,descripcion:'nito',precio:12},
    {id: 3,descripcion:'coca-cola',precio:21},
    {id: 4,descripcion:'sprite',precio:18},
    {id: 5,descripcion:'panditas',precio:14},
  ]

  //FUncion para agregar un producto al arreglo

  agregarProducto(){
    if(this.producto.id ==0){
      alert('El ID debe ser diferente a CERO');
      return;
    }
    //verificamos que el id no sea repetido 
    for(let i=0; i< this.productos.length; i++){
      if(this.producto.id == this.productos[i].id){
        alert('Ya existe un producto con ese ID');
        return;
      }
    }
      //agregamos el producto al arreglo
  this.productos.push({
    id: this.producto.id,
    descripcion: this.producto.descripcion,
    precio: this.producto.precio
  });

    //reiniciamos el objeto producto a sus valores iniciales
    this.producto.id =0;
    this.producto.descripcion ='';
    this.producto.precio =0;
  }

  //Funcion para seleccionar un producto existente
  seleccionarProducto(productoSeleccionado:{id:number;descripcion:string;precio:number}){
    this.producto.id = productoSeleccionado.id;
    this.producto.descripcion = productoSeleccionado.descripcion;
    this.producto.precio = productoSeleccionado.precio;

  }

  //Funcion para modificar el producto
  modificarProducto(){
    for(let i=0; i< this.productos.length; i++){
      if(this.producto.id == this.productos[i].id){
        this.productos[i].descripcion = this.producto.descripcion;
        this.productos[i].precio = this.producto.precio;

        //reseteamos el objeto producto
        this.producto.id =0;
        this.producto.descripcion ='';
        this.producto.precio =0;
        return;
      }
    }
    alert('No existe el ID');
  }

  //Funcion para eliminar un producto del arreglo
  eliminarProducto(id:number){
    for(let i=0; i < this.productos.length;i++){
      if(id == this.productos[i].id){
        this.productos.splice(i,1);
      }
    }
  
}
}
