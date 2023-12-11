import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  public baseUrl:string="https://6572df5d192318b7db412dfe.mockapi.io/employees";

  constructor(private _httpClient:HttpClient) { }

  // createEmployee(data:any):Observable<any>{
  //   return this._httpClient.post("https://6572df5d192318b7db412dfe.mockapi.io/employees",data);
  // }

  createEmployees(data:any):Observable<any>{
    return this._httpClient.post("https://6572df5d192318b7db412dfe.mockapi.io/employees/",data);
  }

  getEmployees():Observable<any>{
    return this._httpClient.get(this.baseUrl);
  }

  getFilteredEmployees(term:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?filter="+term);
  }
  getSortedEmployees(column:string,order:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?sortBy="+column+"&order="+order);
  }
  getPageEmployees(pageno:number):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?limit=10&page="+pageno);
  }

  deleteEmployees(id:string):Observable<any>{
    return this._httpClient.delete(this.baseUrl+"/"+id);
  }

  


}
