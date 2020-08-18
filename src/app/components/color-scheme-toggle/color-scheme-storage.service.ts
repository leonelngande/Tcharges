import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {MobileMoneyProviderName} from '../../models/mobile-money-providers';


@Injectable({
  providedIn: 'root'
})
export class ColorSchemeStorage {

  private storageKey = 'tcharges_is_dark';

  private isDark: BehaviorSubject<boolean> = new BehaviorSubject(null);
  public isDark$ = this.isDark.asObservable();

  constructor() {
    this.getIsDark().then(value => {
      this.isDark.next(value);
    });
  }

  async setIsDark(value: boolean) {
    // console.log('Set can compare charges: ', value);
    await localStorage.setItem(this.storageKey, JSON.stringify(value));
    this.isDark.next(value);
  }

  async getIsDark(): Promise<boolean> {
    const value = await localStorage.getItem(this.storageKey);
    // console.log('Got item: ', value);
    return JSON.parse(value);
  }

  async clearIsDark() {
    await localStorage.removeItem(this.storageKey);
  }
}
