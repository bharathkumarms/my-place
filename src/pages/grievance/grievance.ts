import { Component } from '@angular/core';
import {GrievenceService} from  '../../services/grievance.service'

@Component({
  selector: 'page-grievance',
  templateUrl: 'grievance.html',
})
export class GrievancePage {

  grievances: any = ['Water Problem in Madipakkam','We can do better in saving street light electricity'];

  constructor(private grievenceService:GrievenceService) {
  }

  ionViewWillEnter(){
    this.grievenceService.getGrievances();
  }

  onAddGrievance(value:{description:string}){
    this.grievenceService.addGrievance(value);
  }

}
