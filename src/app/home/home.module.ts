import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HomePage} from './home.page';
import {ComponentsModule} from '../components/components.module';

@NgModule({
  imports: [
      ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
