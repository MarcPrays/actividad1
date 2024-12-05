import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  standalone: false,
  
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent {
  desabilitar: boolean = false
  mensaje: string = "No se ha agregado a ninguna persona"
  titulo = ''

  agregarPersona(){
    this.mensaje = "Persona Agregada"
  }

}
