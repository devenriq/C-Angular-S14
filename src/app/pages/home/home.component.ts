import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  fecha : Date = new Date();

  texto1: string='Enrique Palomino'

  porcentaje:number = 0.5539
  monto:number= 30994.12
}
