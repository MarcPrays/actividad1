import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  standalone: false,
  
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  operando1: number = 0
  operando2: number = 0
  resultado: number = 0

  sumar(){
    return this.resultado = this.operando1 + this.operando2
  }

  restar(){
    return  this.resultado = this.operando1 - this.operando2
  }

  multiplicar(){
    return this.resultado = this.operando1 * this.operando2
  }

  dividir(){
    return this.resultado = this.operando1 / this.operando2
  }
  
}
