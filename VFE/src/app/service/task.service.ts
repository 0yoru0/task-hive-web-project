import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient) { }

  idp: any=1;

  addTask(data:any): Observable<any>{
    data.idProject=this.idp;
    console.log(data)
    return this._http.post('http://localhost/project_api/T_api/InsertTask.php',data)
  }

  getTasks(): Observable<any>{
    console.log(this.idp)
    return this._http.get('http://localhost/project_api/T_api/Tasks.php?idProject='+this.idp)
  }

  deleteTask(x:any):Observable<any>{
    console.log("fds")
    return this._http.delete('http://localhost/project_api/T_api/DeleteTask.php?idTask='+x)
  }
  editTask(x:any,y:any):Observable<any>{
    console.log("fds")
    return this._http.put('http://localhost/project_api/T_api/UpdateTask.php?idTask='+x,y)
  }

  getProjects(): Observable<any>{
    return this._http.get('http://localhost/project_api/P_api/Projects.php')
  }
  addProject(dataa:any):Observable<any>{
    return this._http.post('http://localhost/project_api/P_api/InsertProject.php',dataa)
  }
  editProject(dataa:any,id:any):Observable<any>{
    return this._http.put('http://localhost/project_api/P_api/UpdateProject.php?id='+id,dataa)
  }
  deleteProject(x:any):Observable<any>{
    return this._http.delete('http://localhost/project_api/P_api/DeleteProject.php?id='+x)
  }
  getOneProject(): Observable<any>{
    return this._http.get('http://localhost/project_api/P_api/OneProject.php?id='+this.idp)
  }
}
