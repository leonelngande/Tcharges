import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Tariff} from '../../models/charge';
import {MobileMoneyProvider} from '../../models/mobile-money-providers';

@Component({
  selector: 'app-charges-display',
  templateUrl: './charges-display.component.html',
  styleUrls: ['./charges-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChargesDisplayComponent implements OnInit {

  _tariff: Tariff;
  @Input() set tariff(tariff: Tariff) {
    this._tariff = {...tariff};
  }
  get tariff() {
    return this._tariff;
  }
  @Input() provider: MobileMoneyProvider;
  @Input() amount: number;

  constructor() { }

  ngOnInit() {}

}
