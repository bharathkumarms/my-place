export class GrievenceService{
    private grievance:{description:string}[] = [];

    addGrievance(grievance:{description:string}){
        this.grievance.push(grievance)
    }

    getGrievances(){
        return this.grievance.slice();
    }
}