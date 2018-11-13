import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentSpinnerPage } from './component-spinner.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentSpinnerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponentSpinnerPage]
})
export class ComponentSpinnerPageModule {}
