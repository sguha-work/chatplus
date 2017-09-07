import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';

import { CommonService } from './../../services/common.service';
import {Database} from './../../services/database.service';
import {MessageService} from './../../services/message.service';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController,  private common: CommonService, private database: Database,  private message: MessageService) {
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
        "border-bottom": "1px solide red"
      });
      return false;
    } else {
      passwordDOM.css({
        "border-bottom": "1px solide green"
      });
    }
    return true;
  }

  

  private disableSignUpButton() {
    $("#button_signup").prop("disabled", "disabled").css({
      "opacity": "0.5"
    });
  }

  private enableSignUpButton() {
    $("#button_signup").removeAttr("disabled").css({
      "opacity": "1"
    });
  }

  prepareSignUpObject(phoneNumber: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let signupObject: any;
      signupObject = {};
      signupObject.phoneNUmber = phoneNumber;
      signupObject.password = password;
      signupObject.userName = "";
      signupObject.status = "";
      resolve(signupObject);
    });
  }

  beginSighUpProcess(signupObject: any) {
      this.database.writeToDatabase(signupObject.phoneNUmber, signupObject).then(()=>{
        alert(this.message.getMessage("SIGN_UP_SUCCESS"));
        this.common.showPage("page-login");
      }).catch(() => {
        alert(this.message.getMessage("UNABLE_TO_CONTACT_DATABASE"));
      });
  }

  beginSignUp() {
    let phoneNumber = $("page-signup #txt_userPhoneNumber").val().trim();
    let password = $("page-signup #txt_password").val().trim();
    if(this.validate(phoneNumber, password)) {
      this.disableSignUpButton();
      this.prepareSignUpObject(phoneNumber, password).then((signupObject) => {
        this.beginSighUpProcess(signupObject);
      }).catch((message) => {
        // signup object preparation failed
      });
      
    }
  }

  goToLoginPage() {
    this.common.showPage("page-login");
  }
}
