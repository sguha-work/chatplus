import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CommonService} from "./../../services/common.service";

@IonicPage()
@Component({
  selector: 'page-heading',
  templateUrl: 'heading.html',
})
export class HeadingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private common: CommonService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeadingPage');
  }

  public displayContacts() {
    this.common.showPage("page-contacts");
  }

}
