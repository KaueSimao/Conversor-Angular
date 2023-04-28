import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {

  euro: number;
  libra: number;
  real: number;
  dolar: number;

  calcu(){
    this.dolar = this.real/this.dolar;
    this.euro = this.real/this.euro;
    this.libra = this.real/this.libra;
 }
}
