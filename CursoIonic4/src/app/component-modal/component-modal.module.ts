import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentModalPage } from './component-modal.page';
import { ComponentModalInternoPage } from '../component-modal-interno/component-modal-interno.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponentModalPage, ComponentModalInternoPage],
  entryComponents: [ComponentModalInternoPage],
})
export class ComponentModalPageModule {}
