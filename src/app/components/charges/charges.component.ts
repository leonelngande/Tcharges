import {Component, OnDestroy, OnInit} from '@angular/core';
import {MobileMoneyProvider, mobileMoneyProviders} from '../../models/mobile-money-providers';
import {Tariff} from '../../models/charge';
import {combineLatest, Subject} from 'rxjs';
import {ProviderStorage} from '../../services/provider-storage.service';
import {takeUntil, tap} from 'rxjs/operators';
import {findTariffForAmount} from '../../helpers/find-tariff-for-amount';
import {AmountStorage} from '../../services/amount-storage.service';
import {CanCompareChargesStorage} from '../../services/can-compare-charges-storage.service';

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.scss'],
})
export class ChargesComponent implements OnInit, OnDestroy {

  providers: MobileMoneyProvider[] = mobileMoneyProviders;
  selectedProvider: MobileMoneyProvider;
  amount: number;
  compareCharges: boolean;

  private destroy$ = new Subject<void>();

  constructor(
      // public analyticsService: GoogleAnalyticsService,
      private providerStorage: ProviderStorage,
      private amountStorage: AmountStorage,
      private canCompareChargesStorage: CanCompareChargesStorage,
  ) { }

  async ngOnInit() {
    await this.providerStorage.getProvider();
    combineLatest([
        this.providerStorage.providerName$,
      this.amountStorage.amount$,
      this.canCompareChargesStorage.canCompareCharges$
    ])
        .pipe(
            tap(([providerName, amount, compareCharges]) => {
              this.selectedProvider = this.providers.find(item => item.name === providerName);
              this.amount = amount;
              this.compareCharges = compareCharges;

              if (amount && this.selectedProvider) {
                this.setTariff(amount, this.selectedProvider);
              }
            }),
            takeUntil(this.destroy$),
        ).subscribe();
  }

  setTariff(amount: number, selectedProvider: MobileMoneyProvider) {
    // console.log(amount, selectedProvider.name);

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

  findTariff(amount: number, tariffs: Tariff[]) {
    return findTariffForAmount(amount, tariffs);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
