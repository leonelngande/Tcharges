import {Component, OnInit, Provider} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MoMoProvider, moMoProviders} from '../../models/mo-mo-providers';
import {expressUnionTariffs, ITariff, mtnTariffs, orangeTariffs} from '../../models/charge';
import {takeWhile} from 'rxjs/operators';
import {GoogleAnalyticsService} from '../../services/google-analytics/google-analytics.service';

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

  alive = true;

  providers = moMoProviders.map(provider => {
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

  mtnTariffs = mtnTariffs;
  orangeTariffs = orangeTariffs;
  expressUnionTariffs = expressUnionTariffs;

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

  constructor(
      private fb: FormBuilder,
      public analyticsService: GoogleAnalyticsService,
  ) { }

  ngOnInit() {
    this.initForm();
    this.form.valueChanges
        .pipe(
            takeWhile(_ => this.alive),
        )
        .subscribe(formData => this.setTariff(formData));
  }

  initForm() {
    this.form = this.fb.group({
      provider: [this.providers.find(provider => provider.selected).value, [Validators.required]],
      amount: ['', [Validators.required, Validators.min(100), Validators.max(1000000)]],
      compareCharges: [false],
    });
  }

  get provider() {
    return this.form.get('provider');
  }
  get amount() {
    return this.form.get('amount');
  }
  get compareCharges() {
    return this.form.get('compareCharges');
  }

  setTariff(formData) {
    if (!this.form.valid) {
      return;
    }
    this.resetActiveTariff();

    let tariffsList: ITariff[];
    switch (formData.provider) {
      case MoMoProvider.MTN:
        tariffsList = mtnTariffs;
        // update the active tariff
        this.activeTariff = this.getTariffForAmount(formData.amount, tariffsList);

        break;

        case MoMoProvider.ORANGE:
        tariffsList = orangeTariffs;
        this.activeTariff = this.getTariffForAmount(formData.amount, tariffsList);
        //
        break;

        case MoMoProvider.EU:
        tariffsList = expressUnionTariffs;
        this.activeTariff = this.getTariffForAmount(formData.amount, tariffsList);
        //
        break;
    }

    /*this.sendChargeCalculatedEvent({
      provider: formData.provider,
      amount: formData.amount,
      activeTariff: this.activeTariff
    });*/
  }

  sendChargeCalculatedEvent(params: {provider: Provider, amount: number, activeTariff: ITariff}) {
    this.analyticsService.eventEmitter(
        'chargesPage',
        'chargeCalculated',
        `Provider: ${params.provider}, Amount: ${params.amount}, Tariff Range: ${params.activeTariff.low} - ${params.activeTariff.high}`,
        1
    );
  }

  tariffsForOperator(provider: MoMoProvider) {
    switch (provider) {
      case MoMoProvider.EU:
        return this.expressUnionTariffs;
      case MoMoProvider.MTN:
        return this.mtnTariffs;
      case MoMoProvider.ORANGE:
        return this.orangeTariffs;
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
