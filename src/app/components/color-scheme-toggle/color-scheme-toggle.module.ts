import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {ColorSchemeToggleComponent} from './color-scheme-toggle.component';


@NgModule({
  declarations: [
    ColorSchemeToggleComponent,
  ],
  exports: [
    ColorSchemeToggleComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ColorSchemeToggleModule { }
