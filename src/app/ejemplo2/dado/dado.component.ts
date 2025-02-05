import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dado',
  imports: [],
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent {

  //Propiedades
  //valor:number=Math.floor(Math.random()*6)+1;

  @Input()valor:string='';  

}
