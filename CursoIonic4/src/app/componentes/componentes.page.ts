import { Component, OnInit } from '@angular/core';
import { NavController } from '../../../node_modules/@ionic/angular';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.page.html',
  styleUrls: ['./componentes.page.scss'],
})
export class ComponentesPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  abrirPagina(nomeDaPagina : string){
    this.navCtrl.goForward(nomeDaPagina);
  }
}
