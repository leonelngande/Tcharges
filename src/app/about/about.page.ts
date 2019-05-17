import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {SharePopoverComponent} from '../components/share-popover/share-popover.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() { }

  async onShare($event) {
    const popover = await this.popoverController.create({
      component: SharePopoverComponent,
      event: $event,
      translucent: true
    });
    return await popover.present();
  }

}
