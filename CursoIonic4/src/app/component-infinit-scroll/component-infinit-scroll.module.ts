import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentInfinitScrollPage } from './component-infinit-scroll.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentInfinitScrollPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponentInfinitScrollPage]
})
export class ComponentInfinitScrollPageModule {}
