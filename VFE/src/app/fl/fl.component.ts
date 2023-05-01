import { DialogRef } from '@angular/cdk/dialog';
import { Component,Inject,OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-fl',
  templateUrl: './fl.component.html',
  styleUrls: ['./fl.component.scss']
})
export class FlComponent implements OnInit {
  tform:FormGroup;
  done:any=[];
  nr:any=[];
  in:any=[]

  constructor(private tf: FormBuilder,private ts:TaskService, private dr:DialogRef<FlComponent>,@Inject(MAT_DIALOG_DATA) private data:any){
    this.tform=this.tf.group({
      Nt:'',
      State:'',
      Desc:'',
      Deadline:'',
      URL:''
    })
  }
  ngOnInit(): void {
    this.tform.patchValue(this.data)
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
          if(i.State==="1"){
            this.nr.push(i)
          }
        }
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  onFormSubmit(){
    
    if(this.tform.valid){
      if(this.data){
        this.ts.editTask(this.data.idt,this.tform.value).subscribe({
          next: (res)=>{
            if(res){
              alert('task updated'),
              this.getT(),
              this.dr.close()
            }
          },
          error:(err)=>{
            console.error(err)
          }
        })
      }
      else{
        this.ts.addTask(this.tform.value).subscribe({
          next: (res)=>{
            if(res){
              alert('task added'),
              this.getT(),
              this.dr.close()
            }
          },
          error:(err)=>{
            console.error(err)
          }
        })
      }
    }
  }

}

