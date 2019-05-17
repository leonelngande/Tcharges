import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutPage} from './about.page';
import {ComponentsModule} from '../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: AboutPage
  }
];

@NgModule({
  imports: [
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AboutPage]
})
export class AboutPageModule {}
