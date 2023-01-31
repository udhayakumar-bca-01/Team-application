import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DataService } from './data.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core';
import { AttendenceService } from '../timesheet/attendance.service';
import { RatingModule } from 'primeng/rating';
@Component({
  selector: 'app-apply-attendance',
  templateUrl: './apply-attendance.component.html',
  styleUrls: ['./apply-attendance.component.css']
})
export class ApplyAttendanceComponent {

  eventForm:any;
  leaveForm: any;
  attendanceForm: any;
  fromdateLeave: any;
  toDateLeave: any;
  fdateAttendance: any;
  tdateAttendance: any;
  arr: any = [];
  attendanceArr: any = [];
  show: boolean = false;
  visible: boolean = false;
  FromDate: any;
  ToDate: any;
  Days: any;
  Reason: any;
  home: any;
  items: any;
  Events!:any[];
  array:any=[{
    title:"Ragul",date:"2022-12-09",id:2
  }];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events:
     [{
      title: 'Attendance',
      date: "2022-12-04",
    }],
    plugins: [dayGridPlugin] 
  };
  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
  }

  constructor(private builder: FormBuilder, public datepipe: DatePipe, private dataService: DataService,private attenService:AttendenceService) { }

  ngOnInit() {
    this.leaveForm = this.builder.group({
      fromDate: ['', [Validators.required]],
      toDate: ['', [Validators.required]],
      days: ['', [Validators.required]],
      reason: ['', [Validators.required]],
    });
    this.attendanceForm = this.builder.group({
      fromDate2: ['', [Validators.required]],
      toDate2: ['', [Validators.required]],
      workingHrs: ['', [Validators.required]]
    });
    this.eventForm=this.builder.group({
      title:[''],
      eventDate:['']
    })
    this.items = [
      { label: 'Attendance' }
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
    this.getData();
   
    
  }

  get title(){return this.eventForm.get('title')?.value}
  get eventDate(){return this.eventForm.get('eventDate')?.value}

  get fromDate() { return this.leaveForm.get('fromDate')?.value; }
  get toDate() { return this.leaveForm.get('toDate')?.value; }
  get days() { return this.leaveForm.get('days')?.value; }
  get reason() { return this.leaveForm.get('reason')?.value; }

  get fromDate2() { return this.attendanceForm.get('fromDate2')?.value; }
  get toDate2() { return this.attendanceForm.get('toDate2')?.value; }
  get workingHrs() { return this.attendanceForm.get('workingHrs')?.value; }

  resetForm2() {
    let event = {
      title: '',
      eventDate: '',
    };
    this.eventForm.setValue(event)
  }
  addEvents(){
    let eventDate1=this.datepipe.transform(this.eventDate,'yyyy-MM-dd')
    let obj={title:this.title,date:eventDate1}
    this.attenService.addEvent(obj).subscribe(res=>{
      console.log(res);
      this.getData();
      this.resetForm2();
    })
  }
  getData(){
     setTimeout(()=>{
      this.Events=[];
      console.log(this.Events);
      
      this.attenService.getEvents().subscribe(res=>{
        this.Events.push(res)
        console.log(this.Events[0]);
      })
    },1000)
    setTimeout(()=>{
      this.calendarOptions={
        initialView: 'dayGridMonth',
        events:this.Events[0],
        plugins: [dayGridPlugin] 
      };
    },1500)
  }
  patchDays(event: any) {
    let timeDiff = this.toDate.getTime() - this.fromDate.getTime();
    let diffDays = timeDiff / (1000 * 3600 * 24);
    this.leaveForm.patchValue({ 'days': diffDays })
  }
  resetForm() {
    let user = {
      days: '',
      fromDate: '',
      toDate: '',
      reason: '',
    }
    this.leaveForm.setValue(user)
  }

  onLeaveSubmit() {
    this.fromdateLeave = this.datepipe.transform(this.fromDate, ('MM-dd-yyyy'))
    this.toDateLeave = this.datepipe.transform(this.toDate, ('MM-dd-yyyy'))

    let obj = { id: 1, fromDate: this.fromdateLeave, toDate: this.toDateLeave, Days: this.days, Reason: this.reason }
    console.log(obj, "Object")
    this.dataService.addLeave(obj);
    this.resetForm();
    this.saveLeave();

  }
  async saveLeave() {
    this.show = !this.show;
    this.arr = await this.dataService.getUserLeave();
  }

  deleteLeave(user: any) {
    console.log("deleted");
    this.dataService.deleteLeave(user);

  }

  resetForm1() {
    let attendance = {
      fromDate2: '',
      toDate2: '',
      workingHrs: '',
    }
    this.attendanceForm.setValue(attendance)
  }
  onAttendanceSubmit() {
    console.log(this.attendanceForm.value, 'Attendance');
    this.fdateAttendance = this.datepipe.transform(this.fromDate2, ('MM-dd-yyyy'))
    this.tdateAttendance = this.datepipe.transform(this.toDate2, ('MM-dd-yyyy'))
    let obj1 = { id: 1, fromDate: this.fdateAttendance, toDate: this.tdateAttendance, workingHrs: this.workingHrs }
    console.log(obj1, "Object")
    this.dataService.addAttendance(obj1);
    this.resetForm1();
    this.saveAttendance();
  }
  async saveAttendance() {
    this.visible = !this.visible;
    this.attendanceArr = await this.dataService.getAttendance();
    console.log(this.arr, 'AttendanceForm');
  }

  deleteAttendace(user: any) {
    console.log("deleted");
    this.dataService.deleteAttendance(user);
  }


}


