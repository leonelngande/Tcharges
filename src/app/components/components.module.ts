import {ChargesComponent} from './charges/charges.component';
import {ChargesDisplayComponent} from './charges-display/charges-display.component';
import {ProviderToggleComponent} from './provider-toggle/provider-toggle.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {AmountInputComponent} from './amount-input/amount-input.component';
import {CanCompareChargesComponent} from './can-compare-charges/can-compare-charges.component';

const ENTRY_COMPONENTS = [
  //
];

const COMPONENTS = [
  ChargesComponent,
  ChargesDisplayComponent,
    ProviderToggleComponent,
    AmountInputComponent,
    CanCompareChargesComponent,
    ...ENTRY_COMPONENTS
];

const BASE_MODULES = [
  CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
