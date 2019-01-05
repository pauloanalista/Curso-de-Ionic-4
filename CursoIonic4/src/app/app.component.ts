import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  
  
  paginas : any[] = [
    {titulo: "Home", icone: 'home', url:'/home'},
    {titulo: "Instalação", icone: 'arrow-dropright', url:'/instalacao'},
    {titulo: "Layout", icone: 'arrow-dropright', url:'/layout'},
    {titulo: "Componentes", icone: 'arrow-dropright', url:'/componentes'},
    {titulo: "Api Externa", icone: 'arrow-dropright', url:'/apiExterna'},
    {titulo: "Animações", icone: 'arrow-dropright', url:'/animacoes'},
    {titulo: "Componentes Nativos", icone: 'arrow-dropright', url:'/componentesNativos'},
    
    
  ];

  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
