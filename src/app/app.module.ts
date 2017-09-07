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
import { Sim } from '@ionic-native/sim';
import {File} from '@ionic-native/file';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule  } from 'angularfire2/database';

// custom services
import {CommonService} from "./../services/common.service";
import {SimService} from "./../services/sim.service";
import {MessageService} from "./../services/message.service";
import {LanguageService} from "./../services/language.service";
import {ConfigService} from "./../services/config.service";
import {FileHandler} from "./../services/fileHandler.service";
import {Database} from "./../services/database.service";

export const firebaseConfig = {
  apiKey: "AIzaSyA9wyEcX_Qvceyzz6-a51Gd4TbGgZa5wfY",
  authDomain: "lifechat-909d7.firebaseapp.com",
  databaseURL: "https://lifechat-909d7.firebaseio.com",
  projectId: "lifechat-909d7",
  storageBucket: "lifechat-909d7.appspot.com",
  messagingSenderId: "580846990214"
};
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
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
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
    CommonService,
    File,
    Sim,
    SimService,
    MessageService,
    LanguageService,
    ConfigService,
    FileHandler,
    Database
  ]
})
export class AppModule {}