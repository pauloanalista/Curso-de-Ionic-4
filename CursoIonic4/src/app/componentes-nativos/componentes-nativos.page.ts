import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-componentes-nativos',
  templateUrl: './componentes-nativos.page.html',
  styleUrls: ['./componentes-nativos.page.scss'],
})
export class ComponentesNativosPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  abrirPagina(nomeDaPagina : string){
    this.navCtrl.goForward(nomeDaPagina);
  }
}
