import { Component,Input } from '@angular/core';
import { FlComponent } from '../fl/fl.component';
import { TaskService } from '../service/task.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-expl',
  templateUrl: './expl.component.html',
  styleUrls: ['./expl.component.scss']
})
export class ExplComponent {
@Input() name!:String;
@Input() desc!:String;
@Input() deadline!:String;
@Input() url!:String;
@Input() id!:String;
@Input() data:any;
@Input() State!:String;
@Input() idt!:String
constructor(private ser:TaskService, private di:MatDialog){}

delete(id:String){
  console.log(id)
  this.ser.deleteTask(this.idt).subscribe({
    next:(res)=>{
      alert("task is deleted")
    },
    error:(err)=>{
      console.log(err)
    }
  });
}


edit(data:any){
  console.log(this.idt)
  console.log(data)
  const dialogConfig = new MatDialogConfig();
  dialogConfig.data = {
    idt:this.idt,
    Nt: this.name,
    State: this.State,
    Desc: this.desc,
    Deadline: this.deadline,
    URL: this.url,
    
    
};
data=dialogConfig.data,
  console.log(data)
  this.di.open(FlComponent,{
    data
  })
}

}
