import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '../../../node_modules/@ionic/angular';
import { ComponentModalInternoPage } from '../component-modal-interno/component-modal-interno.page';

@Component({
  selector: 'app-component-modal',
  templateUrl: './component-modal.page.html',
  styleUrls: ['./component-modal.page.scss'],
})
export class ComponentModalPage implements OnInit {

  constructor(private modalCtrl : ModalController, private alertCtrl : AlertController) { }

  ngOnInit() {
  }

  async showModal(){
    let modal = await this.modalCtrl.create({
      component : ComponentModalInternoPage,
      componentProps : {nome: 'Paulo Rogério', idade : 37}
    });

    //Ao fechar o modal, pego o parametro que veio de lá
    modal.onDidDismiss(async responseModal =>{
      
      let alerta = await this.alertCtrl.create({
        header: 'Resultado do modal',
        message: 'Nome: ' + responseModal.data.nome + ' Idade: ' + responseModal.data.idade
      });
  
      return await alerta.present();
    });

    return await modal.present();
  }
}
