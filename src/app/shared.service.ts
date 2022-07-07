import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIURL = 'https://localhost:44311/api'
  constructor( private http:HttpClient) { }

  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIURL + '/employee')
  }

  addEmployee(val:any){
    return this.http.post(this.APIURL + '/employee',val)
  }

  updateEmployee(val:any){
    return this.http.put(this.APIURL + '/employee',val)
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIURL+'/employee',val)
  }
}
