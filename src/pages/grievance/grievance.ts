import { Component } from '@angular/core';
import {GrievenceService} from  '../../services/grievance.service'
import { NavController, AlertController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database"; 

@Component({
  selector: 'page-grievance',
  templateUrl: 'grievance.html',
})
export class GrievancePage {

  grievances: any = ['Water Problem in Madipakkam','We can do better in saving street light electricity'];
  values: FirebaseListObservable<any>;
  constructor(private grievenceService:GrievenceService,af: AngularFireDatabase,
    public navCtrl: NavController, public alertCtrl: AlertController) {
    this.values = af.list('/grievance');
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
