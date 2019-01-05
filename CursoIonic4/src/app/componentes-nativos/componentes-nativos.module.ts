import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentesNativosPage } from './componentes-nativos.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentesNativosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponentesNativosPage]
})
export class ComponentesNativosPageModule {}
