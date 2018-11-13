import { Component, OnInit } from '@angular/core';
import { NavController } from '../../../node_modules/@ionic/angular';

@Component({
  selector: 'app-apis-nativas',
  templateUrl: './apis-nativas.page.html',
  styleUrls: ['./apis-nativas.page.scss'],
})
export class ApisNativasPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  abrirPagina(nomeDaPagina : string){
    this.navCtrl.goForward(nomeDaPagina);
  }
}
