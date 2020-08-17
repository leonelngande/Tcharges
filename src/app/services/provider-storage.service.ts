import { Injectable } from '@angular/core';
import {MobileMoneyProviderName} from '../models/mobile-money-providers';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProviderStorage {

  private storageKey = 'tcharges_provider_name';

  private providerName: BehaviorSubject<MobileMoneyProviderName> = new BehaviorSubject(null);
  public providerName$ = this.providerName.asObservable();

  constructor() {
    this.getProvider().then(providerName => {
      this.providerName.next(providerName as MobileMoneyProviderName);
    });
  }

  async setProvider(name: MobileMoneyProviderName) {
    // console.log('Set item: ', name);
    await localStorage.setItem(this.storageKey, name);
    this.providerName.next(name);
  }

  async getProvider() {
    const value = await localStorage.getItem(this.storageKey);
    // console.log('Got item: ', value);
    return value;
  }

  async clearProvider() {
    await localStorage.removeItem(this.storageKey);
  }
}
