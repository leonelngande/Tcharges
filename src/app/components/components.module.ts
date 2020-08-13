import {ChargesComponent} from './charges/charges.component';
import {ChargesDisplayComponent} from './charges-display/charges-display.component';
import {ProviderToggleComponent} from './provider-toggle/provider-toggle.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';

const ENTRY_COMPONENTS = [
  //
];

const COMPONENTS = [
  ChargesComponent,
  ChargesDisplayComponent,
    ProviderToggleComponent,
    ...ENTRY_COMPONENTS
];

const BASE_MODULES = [
  CommonModule,
    FormsModule,
  IonicModule,
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
