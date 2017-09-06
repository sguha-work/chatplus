import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ConversationPage} from './../conversation/conversation';
import {HeadingPage} from './../heading/heading';
import {ContactsPage} from './../contacts/contacts';
import { AfterViewInit } from '@angular/core';
import { SearchPage } from './../search/search';
import { Events } from 'ionic-angular';

import { ConfigService } from './../../services/config.service';

import * as $ from 'jquery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  implements AfterViewInit{

  constructor(public navCtrl: NavController, private config: ConfigService, public events: Events) {
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
        }
        this.shutDownApplication();
      });
    });
    
  }

  private shutDownApplication() {
    navigator['app'].exitApp();
  }

  private startApplication() {
    this.config.getInformation().then((data) => {
      this.events.publish("USER-INFO-RECEIVED", data);
    }).catch((message) => {
      alert(message);
      this.shutDownApplication();
    });
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

  private initialSetup(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.checkAndCreateConfigFiles().then(() => {
          // config files creation done
          resolve();
        }).catch((message) => {
          // config file creation failed
          reject(message);
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
      }).catch((message) => {
        // config file creation failed
        reject(message);
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
