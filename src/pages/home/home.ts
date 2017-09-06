import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ConversationPage} from './../conversation/conversation';
import {HeadingPage} from './../heading/heading';
import {ContactsPage} from './../contacts/contacts';
import { AfterViewInit } from '@angular/core';
import { SearchPage } from './../search/search';

import { ConfigService } from './../../services/config.service';

import * as $ from 'jquery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  implements AfterViewInit{

  constructor(public navCtrl: NavController, private config: ConfigService) {
    this.checkIfConfigFileExists().then(() => {
      // folder exists, starting application
      this.startApplication();
    }).catch(() => {
      // folder doesn't exists, creating
      this.initialSetup().then(() => {
        // initial setup done
        this.startApplication();
      }).catch((messege) => {
        // cannot start module show error
        if(typeof messege !== "undefined") {
          alert(messege);
        }alert("error");
        this.shutDownApplication();
      });
    });
    
  }

  private shutDownApplication() {
    navigator['app'].exitApp();
  }

  private startApplication() {
    alert("application started");
  }

  private checkIfConfigFileExists(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.config.checkIfConfigFileExists().then(() => {
        resolve();
      }).catch(() => {
        reject();
      });
    });
  }

  private initialSetup(): Promise<any> {alert("initial setup")
    return new Promise((resolve, reject) => {
      this.checkAndCreateConfigFiles().then(() => {
          // config files creation done
          resolve();
        }).catch(() => {
          // config file creation failed
          reject();
        });
      });
  }

  checkAndCreateInitialFolders(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.config.createConfigFolder().then(() => {
        // config folder creation success
        this.config.createDataFolder().then(() => {
          // data folder creation success
          resolve();
        }).catch(() => {
          // data folder creation failed
          reject();
        });
      }).catch(() => {
        // config folder creation failed
        reject();
      });
    });
  }

  private checkAndCreateConfigFiles(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.config.prepareAndWriteInitialConfigData().then(() => {
        // initial config file created
        resolve();
      }).catch(() => {
        // config file creation failed
        reject();
      });
    });
    
  }

  ngAfterViewInit() {
    if($(window).width() < 800) {
      $("page-conversation").hide();
    } else {
      $("page-conversation").show();
    }
  }
}
