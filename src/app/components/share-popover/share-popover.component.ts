import {Component, OnInit} from '@angular/core';
import {SocialSharing} from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-share-popover-components',
  templateUrl: './share-popover.component.html',
  styleUrls: ['./share-popover.component.scss'],
})
export class SharePopoverComponent implements OnInit {

  text = 'I just used MoMoCharges to quickly calculate and compare mobile money charges, check it out!';
  url = 'https://www.momocharges.com';

  constructor(private socialSharing: SocialSharing) {}

  ngOnInit(): void { }

  async shareTwitter() {
    // Either URL or Image
    this.socialSharing.shareViaTwitter(this.text, null, this.url).then(() => {
      // Success
    }).catch((e) => {
      // Error!
    });
  }

  async shareWhatsApp() {
    // Text + Image or URL works
    this.socialSharing.shareViaWhatsApp(this.text, null, this.url).then(() => {
      // Success
    }).catch((e) => {
      // Error!
    });
  }

  async shareEmail() {
    this.socialSharing.shareViaEmail(
        this.text,
        'Checkout MomoCharges, a free Mobile Money charges calculator.',
        [],
        null,
        null
    )
        .then(() => {
          // success
        }).catch((e) => {
          // Error!
        });
  }

  async shareFacebook() {
    this.socialSharing.shareViaFacebook(this.text, null, this.url).then(() => {
      // success
    }).catch((e) => {
      // Error!
    });
  }

}
