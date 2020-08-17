import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {resolveFeeForTariff} from '../../models/charge';
import {MobileMoneyProvider} from '../../models/mobile-money-providers';
import {findTariffForAmount} from '../../helpers/find-tariff-for-amount';

@Component({
  selector: 'app-charges-display',
  templateUrl: './charges-display.component.html',
  styleUrls: ['./charges-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChargesDisplayComponent implements OnInit, OnChanges {

  intraTransferFee: string;
  interTransferFee: string;
  withdrawalFee: string;

  @Input() provider: MobileMoneyProvider;
  @Input() amount: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const amount = changes.amount && changes.amount.currentValue ? changes.amount.currentValue : this.amount;
    const provider = changes.provider && changes.provider.currentValue ? changes.provider.currentValue : this.provider;

    if (!amount) {
      return;
    }

    this.setIntraTransferFee(amount, provider);
    this.setInterTransferFee(amount, provider);
    this.setWithdrawalFee(amount, provider);
  }

  private setWithdrawalFee(amount: number, provider: MobileMoneyProvider) {
    const withdrawalTariff = findTariffForAmount(amount, provider.supportedCountries[0].tariffs.withdrawal);
    if (withdrawalTariff) {
      this.withdrawalFee = resolveFeeForTariff(withdrawalTariff, amount);
    } else {
      this.withdrawalFee = null;
    }
  }

  private setInterTransferFee(amount: number, provider: MobileMoneyProvider) {
    const interTariff = findTariffForAmount(amount, provider.supportedCountries[0].tariffs.inter);
    if (interTariff) {
      this.interTransferFee = resolveFeeForTariff(interTariff, amount);
    } else {
      this.interTransferFee = null;
    }
  }

  private setIntraTransferFee(amount: number, provider: MobileMoneyProvider) {
    const intraTariff = findTariffForAmount(amount, provider.supportedCountries[0].tariffs.intra);
    if (intraTariff) {
      this.intraTransferFee = resolveFeeForTariff(intraTariff, amount);
    } else {
      this.intraTransferFee = null;
    }
  }

  ngOnInit() {}

}
