import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  // tslint:disable-next-line: no-inferrable-types
  porcentaje: number = 50;

  constructor() { }

  ngOnInit() {
  }

  cambiarValor(valor: number) {

    if (this.porcentaje >= 100 && valor > 0 ) {
      this.porcentaje = 100;

      return;
    }
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;

      return;
    }
    this.porcentaje = this.porcentaje + valor;

  }

}
