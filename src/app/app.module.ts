import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona/persona.component';
import { PersonasComponent } from './personas/personas/personas.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './aplicacion/calculadora/calculadora.component';

// Aqui indicamos que componentes vamos a utilizar en nuestra aplicacion 
@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    PersonasComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
