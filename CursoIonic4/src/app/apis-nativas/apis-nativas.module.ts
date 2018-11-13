import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ApisNativasPage } from './apis-nativas.page';

const routes: Routes = [
  {
    path: '',
    component: ApisNativasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ApisNativasPage]
})
export class ApisNativasPageModule {}
