import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MobileMoneyProvider, mobileMoneyProviders} from '../../models/mobile-money-providers';
import {Tariff} from '../../models/charge';
import {combineLatest} from 'rxjs';
import {ProviderStorage} from '../../services/provider-storage.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.scss'],
})
export class ChargesComponent implements OnInit {

  providers: MobileMoneyProvider[] = mobileMoneyProviders;
  selectedProvider: MobileMoneyProvider;

  formModel: {amount: number, canCompareCharges: boolean} = {
    amount: null,
    canCompareCharges: false,
  };

  private activeTariff: Tariff;

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

  alive = true;

  @ViewChild(NgForm) form: NgForm;

  constructor(
      // public analyticsService: GoogleAnalyticsService,
      private providerStorage: ProviderStorage,
  ) { }

  async ngOnInit() {
    await this.providerStorage.getProvider();
    combineLatest([this.providerStorage.providerName$, this.form.valueChanges])
        .pipe(
            tap(([providerName, formData]) => {
              this.selectedProvider = this.providers.find(item => item.name === providerName);

              if (this.form && this.form.valid && this.selectedProvider) {
                this.setTariff(formData.amount, this.selectedProvider);
              }
            }),
        ).subscribe();
  }

  setTariff(amount: number, selectedProvider: MobileMoneyProvider) {
    console.log(amount, selectedProvider.name);
    this.resetActiveTariff();

    this.activeTariff = this.getTariffForAmount(amount, selectedProvider.supportedCountries[0].tariffs);

    /*this.sendChargeCalculatedEvent({
      provider: formData.provider,
      amount: formData.amount,
      activeTariff: this.activeTariff
    });*/
  }

  /*sendChargeCalculatedEvent(params: {provider: Provider, amount: number, activeTariff: Tariff}) {
    this.analyticsService.eventEmitter(
        'chargesPage',
        'chargeCalculated',
        `Provider: ${params.provider}, Amount: ${params.amount}, Tariff Range: ${params.activeTariff.low} - ${params.activeTariff.high}`,
        1
    );
  }*/

  getTariffForAmount(amount: number, tariffsList: Tariff[]) {
    return tariffsList.find(tariff => {
      return amount >= tariff.low && amount <= tariff.high;
    });
  }

  private resetActiveTariff() {
    this.activeTariff = null;
  }
}
