import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule} from '@angular/router';
import { ProjectPageComponent } from './project-page/project-page.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { LandingComponent } from './landing/landing.component';

const appRoute:Routes=[
  {path:'',component:LandingComponent},
  {path:'projects',component:ProjectPageComponent},
  {path:'Tasks' ,component:TaskPageComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
