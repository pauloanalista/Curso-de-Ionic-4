import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-checkbox',
  templateUrl: './component-checkbox.page.html',
  styleUrls: ['./component-checkbox.page.scss'],
})
export class ComponentCheckboxPage implements OnInit {
  
  meses : any[] = [
    {nomeDoMes: 'Janeiro', valor : 1, marcado: false},
    {nomeDoMes: 'Fevereiro', valor : 2, marcado: true},
    {nomeDoMes: 'Março', valor : 3, marcado: true},
    {nomeDoMes: 'Abril', valor : 4, marcado: true},
    {nomeDoMes: 'Maio', valor : 5, marcado: false},
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.meses);
  }

  exibirMeses(){
    console.table(this.meses);
  }
}
