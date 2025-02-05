import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejemplo5',
  imports: [ReactiveFormsModule],
  templateUrl: './ejemplo5.component.html'
})
export class Ejemplo5Component {


  //propiedades
  nombreCliente = '';
  emailCliente = '';
  mensajeCliente = '';
  statusCliente = '';
  municipioCliente ='';
  autorizacionCliente ='';
  enviado = false;
  
  // Formulario reactivo
  formContacto = new FormGroup({
    nombre: new FormControl('',[
      Validators.required,
      Validators.minLength(10)
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    mensaje: new FormControl('',[
      Validators.required,
      Validators.maxLength(500)
    ]),
    status: new FormControl('',[
      Validators.required
    ]),
    municipio: new FormControl('',[
      Validators.required
    ]),
    autorizacion: new FormControl(''),
  });
 
  //metodo que se ejecuta al enviar el formulario
  onSubmit() {
    this.enviado= true;
    if(this.formContacto.valid) {
      this.nombreCliente = this.formContacto.value.nombre!;
      this.emailCliente = this.formContacto.value.email!;
      this.mensajeCliente = this.formContacto.value.mensaje!;
      this.statusCliente = this.formContacto.value.status!;
      this.municipioCliente = this.formContacto.value.municipio!;
      this.autorizacionCliente = this.formContacto.value.autorizacion!;
    }
  }
}
