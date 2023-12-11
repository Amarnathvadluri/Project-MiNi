import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  public employeeForm:FormGroup = new FormGroup({
    name: new FormControl(),
    company: new FormControl(),
    role: new FormControl(),
    package: new FormControl(),
    email: new FormControl(),
    dob: new FormControl(),
    address: new FormGroup({
      addressLine: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl(),
    }),
    hikes: new FormArray([]),
    workMode: new FormControl(),
    travelFee: new FormControl(),
    WifiBill: new FormControl()
  })

  get hikesFormArray(){
    return this.employeeForm.get('hikes') as FormArray;
  }

  add(){
    this.hikesFormArray.push(
      new FormGroup({
        year: new FormControl(),
        percentage: new FormControl()
      })
    )
  }

  delete(i:number){
    this.hikesFormArray.removeAt(i);
  }

  constructor(private _employeeServices:EmployeeService){}

  submit(){
    console.log(this.employeeForm);
    this._employeeServices.createEmployees(this.employeeForm.value).subscribe(
      (data:any)=>{
        alert("Employee created successfully");
      },
      (err:any)=>{
        alert("Invalid details");
      }
    )
  }

}
