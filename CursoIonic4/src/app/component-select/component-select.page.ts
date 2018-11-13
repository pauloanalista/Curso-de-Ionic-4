import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-select',
  templateUrl: './component-select.page.html',
  styleUrls: ['./component-select.page.scss'],
})
export class ComponentSelectPage implements OnInit {

  customAlertOptions: any = {
    header: 'Melhores frutas',
    subHeader: 'Selecione o que deseja comprar',
    message: 'apenas 1,00 real',
    translucent: true
  };

  customPopoverOptions: any = {
    header: 'Cor do cabelo',
    subHeader: 'Qual a cor do seu cabelo?',
    message: 'Informe a cor dominante'
  };

  customActionSheetOptions: any = {
    header: 'Cores',
    subHeader: 'Selecione sua cor favorita'
  };

  constructor() { }

  ngOnInit() {
  }

}
