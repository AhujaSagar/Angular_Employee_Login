import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employee: Employee;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const employeeId: string = params.get('id');
      this.employeeService.getEmployeeDetail(employeeId).subscribe(employee => {
        this.employee = employee;
      });
    });
  }

}
