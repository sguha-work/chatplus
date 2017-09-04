import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CommonService} from "./../../services/common.service";
import { AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
@IonicPage()
@Component({
  selector: 'page-heading',
  templateUrl: 'heading.html',
})
export class HeadingPage  implements AfterViewInit{

  constructor(public navCtrl: NavController, public navParams: NavParams, private common: CommonService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeadingPage');
  }

  public displayContacts() {
    this.common.showPage("page-contacts");
  }

  public changePhoneNumber() {
    if(confirm("This will change your default phone number. Proceed?")) {
      
    }
  }

  private adjustStyle() {
    
  }

  ngAfterViewInit() {
    this.adjustStyle();
    
  }

}
