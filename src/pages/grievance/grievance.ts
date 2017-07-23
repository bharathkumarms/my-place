import { Component } from '@angular/core';
import {GrievenceService} from  '../../services/grievance.service'
import {LoadingController, NavController, AlertController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database"; 

import { Push, PushToken } from '@ionic/cloud-angular';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'page-grievance',
  templateUrl: 'grievance.html',
})
export class GrievancePage {
  
  values: FirebaseListObservable<any>;
  loader:any;

  constructor(private grievenceService:GrievenceService,af: AngularFireDatabase,
    public navCtrl: NavController, public alertCtrl: AlertController, public push: Push,
    public loading: LoadingController) {
    
    this.loader = this.loading.create({
      content: 'Getting latest entries...'});

    this.loader.present().then(() => {
      this.values = af.list('/grievance');
      this.dismissLoader();
    });
  }

  dismissLoader(){
    this.values.subscribe(() => {
    this.loader.dismiss();
    });
  }
  
  add(){
  let prompt = this.alertCtrl.create({
    title: 'How shall we help!',
    message: "Please enter your grievance.",
    inputs: [
      {
        name: 'summary',
        placeholder: ''
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          this.values.push({
            summary: data.summary
          });
        }
      }
    ]
  });
  prompt.present();
}

  ionViewWillEnter(){
    this.grievenceService.getGrievances();
  }

  onAddGrievance(value:{description:string}){
    this.grievenceService.addGrievance(value);
  }
}
