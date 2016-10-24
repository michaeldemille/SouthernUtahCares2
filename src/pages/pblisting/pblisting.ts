import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {SocialSharing} from 'ionic-native';

import {BookmarkService} from '../../providers/bookmark-service/bookmark-service';

@Component({
  templateUrl: 'pblisting.html',
})
export class PbListing {
 post: any;

  constructor(public nav: NavController, public bookmarkService: BookmarkService, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.post = navParams.get('post');
}

bookmark(post) {
  post.format = 'phonebook';
  this.bookmarkService.add(post)
}
share(post) {
  SocialSharing.share(null, post.title.rendered, null, post.link)
}

}
