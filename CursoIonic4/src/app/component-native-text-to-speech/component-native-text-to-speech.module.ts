import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentNativeTextToSpeechPage } from './component-native-text-to-speech.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentNativeTextToSpeechPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponentNativeTextToSpeechPage]
})
export class ComponentNativeTextToSpeechPageModule {}
