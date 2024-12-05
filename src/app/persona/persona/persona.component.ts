import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  standalone: false,
  
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})

// Solo es visible dentro del componente. Por ahora
export class PersonaComponent {
  nombre: string = 'Juan'
  apellido: string = "Perez"

  // atributo privado
  private edad: number = 28

  // funcion publica
  getEdad(): number {
    return this.edad
  }

}
