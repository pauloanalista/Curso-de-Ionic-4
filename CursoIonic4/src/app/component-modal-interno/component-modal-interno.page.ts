import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController, ModalController } from '../../../node_modules/@ionic/angular';
import { ViewController } from '../../../node_modules/@ionic/core';

@Component({
  selector: 'app-component-modal-interno',
  templateUrl: './component-modal-interno.page.html',
  styleUrls: ['./component-modal-interno.page.scss'],
})
export class ComponentModalInternoPage implements OnInit {

  constructor(private navParam : NavParams, private alertCtrl : AlertController, private modalCtrl : ModalController) { }

  async ngOnInit() {
    let nome = this.navParam.get('nome');
    let idade = this.navParam.get('idade');

    let alerta = await this.alertCtrl.create({
      header: 'Enviando parametros',
      message: 'Nome: ' + nome + ' Idade: ' + idade
    });

    return await alerta.present();

  }

  async closeModal(){
    let parametroDeResposta = {nome : 'Fernanda', idade : 32};
    
    this.modalCtrl.dismiss(parametroDeResposta);
  }
}
