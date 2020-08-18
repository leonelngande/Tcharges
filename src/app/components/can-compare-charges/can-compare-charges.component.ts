import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {CanCompareChargesStorage} from '../../services/can-compare-charges-storage.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-can-compare-charges',
  templateUrl: './can-compare-charges.component.html',
  styleUrls: ['./can-compare-charges.component.scss'],
})
export class CanCompareChargesComponent implements OnInit {

  control = new FormControl();
  canCompareCharges$: Observable<boolean>;

  constructor(private canCompareChargesStorage: CanCompareChargesStorage) { }

  async ngOnInit() {
    this.canCompareCharges$ = this.canCompareChargesStorage.canCompareCharges$
        .pipe(
            tap(res => {
              /** If can compare charges is not set, set it to false. */
              if (res === null) {
                this.canCompareChargesStorage.setCanCompareCharges(false);
              }
            })
        );
  }

  toggleCheckbox() {
    this.control.setValue(!this.control.value);
    this.canCompareChargesStorage.setCanCompareCharges(this.control.value);
  }
}
