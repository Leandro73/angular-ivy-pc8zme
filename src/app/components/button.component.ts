import { Component, Input } from '@angular/core';

//declaração
@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})

//classe exportada
//Interpolação de dados
export class Button {
  @Input() label: string = '';
  buttonText: string = 'ACESSAR';
  buttonTexts: string[] = ['COMPRAR', 'VENDER'];
  buttonObject = {
    label: 'Adcionar ao carrinho',
  };

  getAlert() {
    alert(this.label);
  }
}
