import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {MobileMoneyProviderName} from '../models/mobile-money-providers';


@Injectable({
  providedIn: 'root'
})
export class CanCompareChargesStorage {

  private storageKey = 'tcharges_can_compare_charges';

  private canCompareCharges: BehaviorSubject<boolean> = new BehaviorSubject(null);
  public canCompareCharges$ = this.canCompareCharges.asObservable();

  constructor() {
    this.getCanCompareCharges().then(value => {
      this.canCompareCharges.next(value);
    });
  }

  async setCanCompareCharges(value: boolean) {
    // console.log('Set can compare charges: ', value);
    await localStorage.setItem(this.storageKey, JSON.stringify(value));
    this.canCompareCharges.next(value);
  }

  async getCanCompareCharges(): Promise<boolean> {
    const value = await localStorage.getItem(this.storageKey);
    // console.log('Got item: ', value);
    return JSON.parse(value);
  }

  async clearProvider() {
    await localStorage.removeItem(this.storageKey);
  }
}
