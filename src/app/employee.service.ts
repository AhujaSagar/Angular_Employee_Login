import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Employee } from 'src/app/Employee';
import { map, catchError, tap } from 'rxjs/operators';
import { throwError, of, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { stringify } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeIdMap: Map<string, Employee>;

  constructor(private http: HttpClient) {
    this.employeeIdMap = new Map<string, Employee>();
  }

  public getEmployees() {
    var extend="/employees"
    return this.http.get<Employee[]>(`${environment.url+extend}`).
      pipe(
        map((response: any) => {
          console.log(response);
          return response.data;
        }),
        catchError(error => {
          return throwError('Something went wrong!', error);
        }),
        tap(employees => {
          for (let i = 0; i < employees.length; i++) {
            const employee: Employee = employees[i];
            this.employeeIdMap.set(employee.id, employee);
          }
        })
      )
  }

  public getEmployeeDetail(employeeId: string) {
    var extend="/employees"
    return this.http.get<Employee[]>(`${environment.url+extend}`).
      pipe(
        map((response: any) => {
      
        let result=response.data.filter( item => item.id==employeeId)

        console.log(result)
        
         return result[0];
        }),
        catchError(error => {
          return throwError('Something went wrong!', error);
        }));

      // alternate approach using prefetched results
    // return of(this.employeeIdMap.get(employeeId));
  }
}
//     return this.http.get<Employee>(`/api/employee/${employeeId}`).
//       pipe(
//         map((response: any) => response.data),
//         catchError(error => {
//           console.log(error);
//           //return throwError('Something went wrong!');
//           return of(this.employeeIdMap.get(employeeId));
//         })
//       );
//   }
// }