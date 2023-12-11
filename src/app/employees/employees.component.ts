import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

  public employees : any =[];
  public term:string="";
  public column:string="";
  public order:string="";
  public pageno:number=0;
  

  constructor(private _employeeService:EmployeeService){
    
    this._employeeService.getEmployees().subscribe(
      (data:any)=>{
        this.employees=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
      
    )


  }
  
  getFilteredEmployees(){
    this._employeeService.getFilteredEmployees(this.term).subscribe(
      (data:any)=>{
        this.employees=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
      
    )

  }
  sort(){
    this._employeeService.getSortedEmployees(this.column,this.order).subscribe(
      (data:any)=>{
        this.employees=data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

  page(){
    this._employeeService.getPageEmployees(this.pageno).subscribe(
      (data:any)=>{
        this.employees=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

    delete(id:string){
      this._employeeService.deleteEmployees(id).subscribe(
        (data:any)=>{
          alert("deleted successfully");
          location.reload();
        },
        (err:any)=>{
          alert("internal server error");
        }
      )
    }
 

}
