import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MoMoProvider, MoMoProviders} from '../models/mo-mo-providers';
import {ITariff, MtnTariffs} from '../models/charge';

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.scss'],
})
export class ChargesComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  showMessages: any = {};
  errors: string[] = [];
  messages: string[] = [];

  providers = MoMoProviders.map(provider => {
    if (provider.value === 'mtn') {
      provider.selected = true;
    }
    return provider;
  });

  // tslint:disable-next-line:variable-name
  private _activeTariff: ITariff;
  get activeTariff() {
    return this._activeTariff;
  }
  set activeTariff(tariff: ITariff) {
    this._activeTariff = tariff;
  }

  validationMessages = {
    provider: [
      { type: 'required', message: 'Provider is required.' },
    ],
    amount: [
      { type: 'required', message: 'Amount is required.' },
      { type: 'min', message: 'Mobile Money transfers have a current lower limit of 100.' },
      { type: 'max', message: 'Mobile Money transfers have a current upper limit of 1,000,000.' },
    ],
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      provider: [this.providers.find(provider => provider.selected).value, [Validators.required]],
      amount: ['', [Validators.required, Validators.min(100), Validators.max(1000000)]],
    });
  }

  get provider() {
    return this.form.get('provider');
  }
  get amount() {
    return this.form.get('amount');
  }

  getTariff(formData) {
    this.resetActiveTariff();

    let tariffsList: ITariff[];
    switch (formData.provider) {
      case MoMoProvider.MTN:
        tariffsList = MtnTariffs;
        // update the active tariff
        this.activeTariff = this.getTariffForAmount(formData.amount, tariffsList);

        break;

        case MoMoProvider.ORANGE:
        tariffsList = MtnTariffs;
        //
        break;

        case MoMoProvider.EU:
        tariffsList = MtnTariffs;
        //
        break;
    }
  }

  getTariffForAmount(amount: number, tariffsList: ITariff[]) {
    return tariffsList.find(tariff => {
      return amount >= tariff.low && amount <= tariff.high;
    });
  }

  private resetActiveTariff() {
    this.activeTariff = null;
  }
}
