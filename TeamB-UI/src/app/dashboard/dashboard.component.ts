import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Today!:string;
  Time!:any;
  selectedValue='';

  weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  contents=[
    {id:1,icon:' school',content:'Achievements',img:'../../assets/acheive (1).jpg'},
    {id:2,icon:'list_alt',content:'Attendance',img:'../../assets/attendance.png'},
    {id:3,icon:'bar_chart',content:'Timesheet',img:'../../assets/timesheet1.jpg'},
    {id:4,icon:'import_contacts',content:'Status',img:'../../assets/training.jpg  '},
  ]
  
  Accounts=[
    {id:1,mail:'marudhu12@gmail.com'}
  ]

  constructor(private auth: AuthService ,private dateRef:DatePipe,private router:Router) { }

  ngOnInit(): void {
  this.auth.canAccess();
  let date=new Date();
    this.Today=this.weekdays[date.getDay()];
    this.Time =this.dateRef.transform(date,'HH:mm');
  }
  openDashboard(id:number){
    if(id==3){
    this.router.navigate(['/timesheet']);
    console.log("hi");
    }
    if(id==1){
      this.router.navigate(['/acheivement']);
    console.log("hi");
    }
    if(id==2){
      this.router.navigate(['/attendance']);
    }
    if(id==4){
      this.router.navigate(['/status'])
      console.log("Good")
    }
  }
}




  

  