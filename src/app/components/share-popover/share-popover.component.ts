import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-share-popover-components',
  templateUrl: './share-popover.component.html',
  styleUrls: ['./share-popover.component.scss'],
})
export class SharePopoverComponent implements OnInit {

  text = 'I just used MoMoCharges to quickly calculate and compare mobile money charges, check it out!';
  url = 'https://www.momocharges.com';

  constructor() {}

  ngOnInit(): void { }

  async shareTwitter() {
    //
  }

  async shareWhatsApp() {
    //
  }

  async shareEmail() {
    //
  }

  async shareFacebook() {
    //
  }

}
