import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DpComponent } from '../dp/dp.component';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  constructor(private _dialog: MatDialog,private ts:TaskService,private _router: Router){}

  pro:any=[];
  per:any=[]
  openD(){
    this._dialog.open(DpComponent)
  }
  ngOnInit(): void {
    this.getP();
    console.log(this.pro)
  }

  getP(){
    this.ts.getProjects().subscribe({
      next:(res)=>{
        for(let i of res){
          if(i.type==="1"){
            this.pro.push(i)
          }
          if(i.type==="2"){
            this.per.push(i)
          }
        }
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  gotask(x:any){
    this.ts.idp=x
    console.log(x)
    this._router.navigate(['Tasks'])
  }

}
