import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AmountStorage} from '../../services/amount-storage.service';

@Component({
  selector: 'app-amount-input',
  templateUrl: './amount-input.component.html',
  styleUrls: ['./amount-input.component.scss'],
})
export class AmountInputComponent implements OnInit {

  amountControl = new FormControl('', [
      Validators.required,
    Validators.min(100),
    Validators.max(1000000)
  ]);

  validationMessages = [
      // { type: 'required', message: 'Amount is required.' },
      { type: 'min', message: 'Mobile Money transfers have a current lower limit of 100 XAF.' },
      { type: 'max', message: 'Mobile Money transfers have a current upper limit of 1,000,000 XAF.' },
    ];

  constructor(private amountStorage: AmountStorage) { }

  ngOnInit() {}

  saveAmount($event) {
    const value = this.amountControl.valid ? $event.target.value : null;
    this.amountStorage.setAmount(value);
  }
}
