import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    var user=document.getElementById('user');
      user.innerText='Hi '+localStorage.getItem('accessToken');
  }
  Logout(){
    localStorage.removeItem('accessToken');
  //navigation link.
   this.router.navigate(['login']);
  }

}
