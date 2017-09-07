import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommonService } from './../../services/common.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, private common: CommonService) {
  }
  
  public goToSignUpPage() {
    alert("going to signup page");
    this.common.showPage("page-signup");
  }

  public goToLogin() {
    
  }
}
