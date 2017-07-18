import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewsPage} from '../news/news';
import {GrievancePage} from '../grievance/grievance';
import {HirePage} from '../hire/hire';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onLoadNews(){
    this.navCtrl.push(NewsPage)
  }

  onLoadGrievance(){
    this.navCtrl.push(GrievancePage)
  }

  onLoadHire(){
    this.navCtrl.push(HirePage)
  }
}
