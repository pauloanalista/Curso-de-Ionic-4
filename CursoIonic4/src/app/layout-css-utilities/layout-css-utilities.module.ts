import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LayoutCssUtilitiesPage } from './layout-css-utilities.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutCssUtilitiesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LayoutCssUtilitiesPage]
})
export class LayoutCssUtilitiesPageModule {}
