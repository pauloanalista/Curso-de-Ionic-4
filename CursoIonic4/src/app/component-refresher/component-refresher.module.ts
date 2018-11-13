import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentRefresherPage } from './component-refresher.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentRefresherPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponentRefresherPage]
})
export class ComponentRefresherPageModule {}
