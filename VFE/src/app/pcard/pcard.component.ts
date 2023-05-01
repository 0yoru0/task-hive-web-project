import { Component,Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DpComponent } from '../dp/dp.component';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-pcard',
  templateUrl: './pcard.component.html',
  styleUrls: ['./pcard.component.scss']
})
export class PcardComponent {
  @Input() idProject!:String;
  @Input() Np!:String;
  @Input() desc!:String;
  @Input() type!:any;

  constructor(private ser:TaskService, private di:MatDialog){}

  delete(id:any){
    this.ser.deleteProject(this.idProject).subscribe({
      next:(res)=>{
        alert("Project is deleted")
      },
      error:(err)=>{
        console.log(err)
      }
    });
  }
  edit(data:any){
    console.log(data.type)
    console.log(data)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      idProject:this.idProject,
      Np: this.Np,
      desc: this.desc,
      type: this.type,
            
  };
  data=dialogConfig.data,
    console.log(data)
    this.di.open(DpComponent,{
      data
    })
  }
}
