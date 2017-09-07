import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommonService } from './../../services/common.service';
import * as $ from 'jquery';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, private common: CommonService) {
  }

  private validate(phn: string, password: string): boolean {
    let phoneNumberDOM = $("#txt_userPhoneNumber");
    let passwordDOM = $("#txt_password");
    if(isNaN(parseInt(phn))) {
      passwordDOM.css({
        "border": "1px solide red"
      });
      return false;
    } else {
      passwordDOM.css({
        "border": "1px solide green"
      });
    }

    if(password === "" || password.length<5) {
      passwordDOM.css({
        "border": "1px solide red"
      });
      return false;
    } else {
      passwordDOM.css({
        "border": "1px solide green"
      });
    }
    return true;
  }
  
  public goToSignUpPage() {
    alert("going to signup page");
    this.common.showPage("page-signup");
  }

  public goToLogin() {
    let phoneNumber = $("#txt_userPhoneNumber").val().trim();
    let password = $("#txt_password").val().trim();
    if(this.validate(phoneNumber, password)) {
      alert("x");
    } else {
      return false;
    }
  }
}
