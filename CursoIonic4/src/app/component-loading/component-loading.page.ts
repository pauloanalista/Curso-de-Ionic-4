import { Component, OnInit } from '@angular/core';
import { LoadingController } from '../../../node_modules/@ionic/angular';

@Component({
  selector: 'app-component-loading',
  templateUrl: './component-loading.page.html',
  styleUrls: ['./component-loading.page.scss'],
})
export class ComponentLoadingPage implements OnInit {

  constructor(private loadingCtrl : LoadingController) { }

  ngOnInit() {
  }

  async showLoadingDefault(){
    let loading = await this.loadingCtrl.create({
      content : 'Processando...',
      duration: 2000
    });

    return await loading.present();
  }

  async showLoadingCustomizeSpinner(spinnerName : string){
    let loading = await this.loadingCtrl.create({
      spinner : spinnerName,
      content : 'Processando...',
      duration: 1500, //milisegundos
    });

    return await loading.present();
  }

  async showLoadingCustomizeTranslucent(){
    let loading = await this.loadingCtrl.create({
      content : 'Translucent',
      duration: 1500, //milisegundos
      translucent: true,
    });

    return await loading.present();
  }

  async showLoadingConsumindoApi(){
    let loading = await this.loadingCtrl.create({
      content : 'Requisição para o servidor',
    });

    //Simulando o tempo de resposta da api
    //ex: requisição http para o servido
    setTimeout(()=>{
      console.log('Servidor respondeu')
      loading.dismiss();
    }, 5000);

    console.log('Fiz uma requisição para o servidor')
    return await loading.present();
  }
}

