import { Component,Input,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FlComponent } from '../fl/fl.component';
import { TaskService } from '../service/task.service';
@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {
  title = 'tasks';
  done:any=[];
  nr:any=[];
  in:any=[];
  @Input() np:any;
  constructor(private _dialog: MatDialog,private ts:TaskService){}
  openD(){
    this._dialog.open(FlComponent)
  }

  ngOnInit(): void {
    this.getT(),
    this.getPN()
    
  }

  getT(){
    this.ts.getTasks().subscribe({
      next:(res)=>{
        for(let i of res){
          if(i.State==="1"){
            this.done.push(i)
          }
          if(i.State==="2"){
            this.in.push(i)
          }
          if(i.State==="3"){
            this.nr.push(i)
          }
        }
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  getPN(){
    this.ts.getOneProject().subscribe({
      next:(ress)=>{
        this.np=(ress[0].Np);
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}

