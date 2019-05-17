import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChargesComponent} from './charges/charges.component';
import {ChargesDisplayComponent} from './charges-display/charges-display.component';
import {ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {SharePopoverComponent} from './share-popover/share-popover.component';
import {ShareModule} from '@ngx-share/core';

const ENTRY_COMPONENTS = [
  SharePopoverComponent,
];

const COMPONENTS = [
  ChargesComponent,
  ChargesDisplayComponent,
    ...ENTRY_COMPONENTS
];

const BASE_MODULES = [
  CommonModule,
  ReactiveFormsModule,
  IonicModule,
    ShareModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS, ...BASE_MODULES],
  entryComponents: [...ENTRY_COMPONENTS],
  imports: [
      ...BASE_MODULES
  ]
})
export class ComponentsModule { }
