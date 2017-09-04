import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TimelinePage } from '../pages/timeline/timeline';
import { PeoplePage } from '../pages/people/people';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { SearchPage } from '../pages/search/search';
import { LockPage } from '../pages/lock/lock';
import { ConversationPage } from '../pages/conversation/conversation';
import {HeadingPage} from '../pages/heading/heading';
import {ContactsPage} from '../pages/contacts/contacts';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {CommonService} from "./../services/common.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TimelinePage,
    PeoplePage,
    TabsControllerPage,
    LoginPage,
    SignupPage,
    //ChatPage,
    LockPage,
    ConversationPage,
    HeadingPage,
    ContactsPage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TimelinePage,
    PeoplePage,
    TabsControllerPage,
    LoginPage,
    SignupPage,
    //ChatPage,
    LockPage,
    ConversationPage,
    HeadingPage,
    ContactsPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommonService
  ]
})
export class AppModule {}