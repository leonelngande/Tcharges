import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {CanCompareChargesStorage} from '../../services/can-compare-charges-storage.service';

@Component({
  selector: 'app-can-compare-charges',
  templateUrl: './can-compare-charges.component.html',
  styleUrls: ['./can-compare-charges.component.scss'],
})
export class CanCompareChargesComponent implements OnInit {

  control: FormControl;

  constructor(private canCompareChargesStorage: CanCompareChargesStorage) { }

  async ngOnInit() {
    const canCompare = this.canCompareChargesStorage.getCanCompareCharges();
    this.control = new FormControl(canCompare);
  }

  toggleCheckbox() {
    this.control.setValue(!this.control.value);
    this.canCompareChargesStorage.setCanCompareCharges(this.control.value);
  }
}
