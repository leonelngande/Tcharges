import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AmountStorage {

  private amount: BehaviorSubject<number> = new BehaviorSubject(null);
  public amount$ = this.amount.asObservable();

  constructor() { }

  setAmount(value: number) {
    // console.log('Set amount: ', value);
    this.amount.next(value);
  }
}
