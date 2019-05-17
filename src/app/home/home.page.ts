import { Component } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {SharePopoverComponent} from '../components/share-popover/share-popover.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(public popoverController: PopoverController) { }

    async onShare($event) {
        const popover = await this.popoverController.create({
            component: SharePopoverComponent,
            event: $event,
            translucent: true
        });
        return await popover.present();
    }
}
