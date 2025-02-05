import { Component } from '@angular/core';
import { DadoComponent } from './dado/dado.component';

@Component({
  selector: 'app-ejemplo2',
  imports: [DadoComponent],
  templateUrl: './ejemplo2.component.html'
})
export class Ejemplo2Component {

  ///resultado
  resultado:string = '';
  valor1:number =this.generarAleatorio();
  valor2:number =this.generarAleatorio();
  valor3:number =this.generarAleatorio();
  

//metodo que genera un numero aleatorio entre 1 y 6
generarAleatorio(){
  return Math.floor(Math.random()*6)+1;
}

//funcion que hace la tirada y verifica el resultado
  tirarDados(){
    this.valor1=this.generarAleatorio();
    this.valor2=this.generarAleatorio();
    this.valor3=this.generarAleatorio();
    
   //comparamos si los 3 son iguales
   if(this.valor1 == this.valor2 && this.valor1 == this.valor3 ){
    this.resultado = 'Felicidades ganaste';
   } else {
    this.resultado = 'Lastima sigue participando'
   }
  }
}
