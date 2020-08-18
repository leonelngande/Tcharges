import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ColorSchemeStorage} from './color-scheme-storage.service';
import {tap} from 'rxjs/operators';


/**
 * @see https://petercoding.com/ionic/2020/02/15/implementing-dark-mode-in-ionic-5/
 * @see https://ionicframework.com/docs/theming/dark-mode
 */

@Component({
  selector: 'app-color-scheme-toggle',
  templateUrl: './color-scheme-toggle.component.html',
  styleUrls: ['./color-scheme-toggle.component.scss'],
})
export class ColorSchemeToggleComponent implements OnInit {

  isDark$: Observable<boolean>;

  constructor(private colorSchemeStorage: ColorSchemeStorage) {

    /*// Use matchMedia to check the user preference
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
    // Listen for changes to the prefers-color-scheme media query
    systemDark.addListener(this.colorTest);*/

  }

  ngOnInit() {
    this.isDark$ = this.colorSchemeStorage.isDark$
        .pipe(
            tap(res => {
              this.toggleDarkTheme(res);
            })
        );
  }

  onClick(event){
    this.colorSchemeStorage.setIsDark(event.detail.checked);
  }

  toggleDarkTheme(shouldAdd: boolean) {
    if (shouldAdd){
      document.body.setAttribute('data-theme', 'dark');
    }
    else{
      document.body.setAttribute('data-theme', 'light');
    }
  }

  /*// Add or remove the "dark" class based on if the media query matches
  colorTest(systemInitiatedDark) {
    if (systemInitiatedDark.matches) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }*/

}
