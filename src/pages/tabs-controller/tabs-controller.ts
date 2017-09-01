import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TimelinePage } from '../timeline/timeline';
import { PeoplePage } from '../people/people';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = HomePage;
  tab2Root: any = TimelinePage;
  tab3Root: any = PeoplePage;
  constructor(public navCtrl: NavController) {
  }
  
}
