import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Employee } from 'src/app/Employee';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  public getEmployees() {
    return this.http.get<Employee[]>(`/api/employees`).
      pipe(
        map((response: any) => response.data),
        catchError(error => {
          return throwError('Something went wrong!');
        })
      );
  }

  public getEmployeeDetail(employeeId: number) {
    return this.http.get<Employee>(`/api/employee/${employeeId}`).
      pipe(
        map((response: any) => response.data),
        catchError(error => {
          return throwError('Something went wrong!');
        })
      );
  }
}
