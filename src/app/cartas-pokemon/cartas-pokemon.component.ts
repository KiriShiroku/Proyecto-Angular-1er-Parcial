import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemon-catalog',
  imports: [FormsModule, ReactiveFormsModule], // Asegúrate de importar ReactiveFormsModule
  templateUrl: './cartas-pokemon.component.html'
})
export class PokemonCatalogComponent {

  // FormGroup para validaciones
  formCarta = new FormGroup({
    id: new FormControl<number | null>(null, [Validators.required, Validators.min(1)]),
    nombre: new FormControl<string | null>('', [Validators.required, Validators.minLength(3)]),
    precio: new FormControl<number | null>(null, [Validators.required, Validators.min(1)])
  });

  // PROPIEDADES
  cartas = [
    { id: 1, nombre: 'Pikachu', precio: 50 },
    { id: 2, nombre: 'Charizard', precio: 300 },
    { id: 3, nombre: 'Bulbasaur', precio: 40 },
    { id: 4, nombre: 'Mewtwo', precio: 500 },
    { id: 5, nombre: 'Eevee', precio: 60 },
  ];

  // Función para agregar una carta al arreglo
  agregarCarta() {
    if (this.formCarta.invalid) {
      alert('Por favor, completa el formulario correctamente.');
      return;
    }

    const nuevaCarta = {
      id: this.formCarta.value.id!,
      nombre: this.formCarta.value.nombre!,
      precio: this.formCarta.value.precio!
    };

    // Verificamos que el ID no sea repetido
    if (this.cartas.some(carta => carta.id === nuevaCarta.id)) {
      alert('Ya existe una carta con ese ID');
      return;
    }

    // Agregamos la carta al arreglo
    this.cartas.push(nuevaCarta);

    // Reseteamos el formulario
    this.formCarta.reset();
  }

  // Función para seleccionar una carta existente
  seleccionarCarta(cartaSeleccionada: { id: number; nombre: string; precio: number }) {
    this.formCarta.setValue({
      id: cartaSeleccionada.id,
      nombre: cartaSeleccionada.nombre,
      precio: cartaSeleccionada.precio
    });
  }

  // Función para modificar la carta
  modificarCarta() {
    if (this.formCarta.invalid) {
      alert('Por favor, completa el formulario correctamente.');
      return;
    }

    const cartaModificada = {
      id: this.formCarta.value.id!,
      nombre: this.formCarta.value.nombre!,
      precio: this.formCarta.value.precio!
    };

    const index = this.cartas.findIndex(carta => carta.id === cartaModificada.id);
    if (index === -1) {
      alert('No existe el ID');
      return;
    }

    // Modificamos la carta
    this.cartas[index] = cartaModificada;

    // Reseteamos el formulario
    this.formCarta.reset();
  }

  // Función para eliminar una carta del arreglo
  eliminarCarta(id: number) {
    this.cartas = this.cartas.filter(carta => carta.id !== id);
  }
}