import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LayoutSplitPanePage } from './layout-split-pane.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutSplitPanePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LayoutSplitPanePage]
})
export class LayoutSplitPanePageModule {}
