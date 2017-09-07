import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';

import { CommonService } from './../../services/common.service';
import {Database} from './../../services/database.service';
import {MessageService} from './../../services/message.service';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, private common: CommonService, private database: Database,  private message: MessageService) {
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
    if(phn.length !== 10) {
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

  private beginSignUpProcess(loginObject: any) {
    this.database.getFromDatabase(loginObject.phoneNumber).then((data) => {
      if(data===null) {
        alert(this.message.getMessage("PHONENUMBER_NOT_FOUND"));
      }
    }).catch((error) => {
      alert(this.message.getMessage("UNABLE_TO_CONTACT_DATABASE"));
    });
  }
  
  private prepareLoginObject(phoneNumber: string, password: string): any {
    let loginObject: any;
    loginObject = {};
    loginObject.phoneNumber = phoneNumber;
    loginObject.password = password;
    return loginObject;
  }

  public goToSignUpPage() {
    alert("going to signup page");
    this.common.showPage("page-signup");
  }
  

  public goToLogin() {
    let phoneNumber = $("#txt_userPhoneNumber").val().trim();
    let password = $("#txt_password").val().trim();
    if(this.validate(phoneNumber, password) === true) {
      this.beginSignUpProcess(this.prepareLoginObject(phoneNumber, password));
    } else {
      return false;
    }
  }
}
