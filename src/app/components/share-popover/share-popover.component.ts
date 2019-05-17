import {Component, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';

export interface IShareProvider {
  name: string;
  shareText: string;
  iconName: string;
  count?: number;
  hasShareCount?: boolean;
  color?: string;
}

@Component({
  selector: 'app-share-popover-components',
  templateUrl: './share-popover.component.html',
  styleUrls: ['./share-popover.component.scss'],
})
export class SharePopoverComponent implements OnInit {

  text = 'I just used MoMoCharges to quickly calculate and compare mobile money charges, check it out!';
  url = 'https://www.momocharges.com';
  shareProviders: IShareProvider[] = [
    {
      name: 'facebook',
      shareText: 'Share on Facebook',
      iconName: 'logo-facebook',
      hasShareCount: false,
      color: 'facebook',
    },
    {
      name: 'twitter',
      shareText: 'Share on Twitter',
      iconName: 'logo-twitter',
      hasShareCount: false,
      color: '#00acee',
    },
    {
      name: 'whatsapp',
      shareText: 'Share with Whatsapp',
      iconName: 'logo-whatsapp',
      hasShareCount: false,
      color: '#25D366',
    },
    {
      name: 'email',
      shareText: 'Share by Email',
      iconName: 'mail',
      hasShareCount: false,
      color: '#FF961C',
    },
  ];

  constructor(private popoverController: PopoverController) {}

  ngOnInit(): void { }

  setCount(count: number, provider: IShareProvider) {
    provider.count = count;
  }

  async dismissSharePopover() {
    await this.popoverController.dismiss();
  }
}
