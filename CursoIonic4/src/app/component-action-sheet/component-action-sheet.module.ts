import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentActionSheetPage } from './component-action-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentActionSheetPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponentActionSheetPage]
})
export class ComponentActionSheetPageModule {}
