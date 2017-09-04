import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ConversationPage} from './../conversation/conversation';
import {HeadingPage} from './../heading/heading';
import {ContactsPage} from './../contacts/contacts';
import { AfterViewInit } from '@angular/core';
import { SearchPage } from './../search/search';

import * as $ from 'jquery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  implements AfterViewInit{

  constructor(public navCtrl: NavController) {
  }
  ngAfterViewInit() {
    if($(window).width() < 800) {
      $("page-conversation").hide();
    } else {
      $("page-conversation").show();
    }
  }
}
