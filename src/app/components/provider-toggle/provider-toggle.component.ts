import {Component, OnInit} from '@angular/core';
import {MobileMoneyProvider, MobileMoneyProviderName, mobileMoneyProviders} from '../../models/mobile-money-providers';
import {Observable} from 'rxjs';
import {ProviderStorage} from '../../services/provider-storage.service';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-provider-toggle',
  templateUrl: './provider-toggle.component.html',
  styleUrls: ['./provider-toggle.component.scss'],
})
export class ProviderToggleComponent implements OnInit {

  providers: MobileMoneyProvider[] = mobileMoneyProviders;
  selectedProviderName$: Observable<MobileMoneyProviderName>;

  constructor(private providerStorage: ProviderStorage) {}

  ngOnInit() {
    this.selectedProviderName$ = this.providerStorage.providerName$
        .pipe(
            tap(providerName => {
              /** If provider name is not set, set it to the name of the first provider. */
              if (!providerName) {
                this.providerStorage.setProvider(this.providers[0].name);
              }
            })
        );
  }

  async save($event) {
    await this.providerStorage.setProvider($event.target.value);
  }
}
