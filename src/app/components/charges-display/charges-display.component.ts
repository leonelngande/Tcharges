import {Component, Input, OnInit} from '@angular/core';
import {ITariff} from '../../models/charge';
import {MoMoProvider} from '../../models/mo-mo-providers';

@Component({
  selector: 'app-charges-display',
  templateUrl: './charges-display.component.html',
  styleUrls: ['./charges-display.component.scss'],
})
export class ChargesDisplayComponent implements OnInit {

  _tariff: ITariff;
  @Input() set tariff(tariff: ITariff) {
    this._tariff = {...tariff};
  }
  get tariff() {
    return this._tariff;
  }
  @Input() provider: MoMoProvider;
  @Input() amount: number;

  constructor() { }

  ngOnInit() {}

}
