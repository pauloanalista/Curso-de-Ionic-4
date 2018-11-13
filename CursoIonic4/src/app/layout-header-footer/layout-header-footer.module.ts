import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LayoutHeaderFooterPage } from './layout-header-footer.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutHeaderFooterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LayoutHeaderFooterPage]
})
export class LayoutHeaderFooterPageModule {}
