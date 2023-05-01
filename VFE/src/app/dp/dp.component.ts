import { DialogRef } from '@angular/cdk/dialog';
import { Component,Inject,OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskService } from '../service/task.service';
@Component({
  selector: 'app-dp',
  templateUrl: './dp.component.html',
  styleUrls: ['./dp.component.scss']
})
export class DpComponent {
  tform:FormGroup ;
  constructor(private tf: FormBuilder,private ts:TaskService, private dp:DialogRef,@Inject(MAT_DIALOG_DATA) public data:any){
    this.tform=this.tf.group({
      Np:'',
      desc:'',
      type:'',
    })
  }
  ngOnInit(){
    this.tform.patchValue(this.data)
  }
  onFormSubmit(){
    if(this.tform.valid){
      if(this.data){
        this.ts.editProject(this.tform.value,this.data.idProject).subscribe({
          next: (res)=>{
            if(res){
              alert('Project updated'),
              this.dp.close()
            }
          },
          error:(err)=>{
            console.error(err)
          }
        })
      }
      else{
        this.ts.addProject(this.tform.value).subscribe({
          next: (res)=>{
            if(res){
              alert('task added'),
              this.dp.close()
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
