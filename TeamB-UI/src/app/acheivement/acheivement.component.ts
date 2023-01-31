import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AttendenceService } from '../timesheet/attendance.service';
export interface Irating {
  id: number;
  name: string;
  message: string;
  stars: number;
  content: string;
}
@Component({
  selector: 'app-achievement',
  templateUrl: './acheivement.component.html',
  styleUrls: ['./acheivement.component.css']
})
export class AcheivementComponent implements OnInit {

  Users: Irating[] = [];
  rate: any;
  empty: number = 0;
  arr: any = [];
  newArr: any = [];
  visible = false;
  property = '';
  show = true;
  toggle=true
  mesgId: any;
  userid:any;
  items:any;
  home:any;
  messageArray: any;
  msgVisible: boolean = false;
  nameVisible: boolean = false;
  formValue!: FormGroup;

  constructor(private attendanceService: AttendenceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getRating();
    this.formValue = this.formBuilder.group({
      message: ['']
    })
    this.items = [
      { label: 'Acheivements' }
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

  //Users=["Udhay",'Marudhu',"Varsha","Lakshmi",'Harish']

  // Users=[
  //   {name:"Udhay",star:5},
  //   {name:"Marudhu",star:2},
  //   {name:"Varsha",star:4},
  //   {name:"Harish",star:3},
  //   {name:"Lakshmi",star:4}
  // ]

  getRating() {
    this.attendanceService.getRating().subscribe((data: any) => {
      console.log(data)
      this.Users = data
      this.nameVisible = true;
    });
  }
  onClick(event: any, id: number, name: string, message: string) {
    let value = { 'stars': event.value, 'name': name, 'message': message }
    this.attendanceService.updateRating(id, value).subscribe((data: any) => {
      console.log(data);
    })
    this.getMessage(id);

  }

  cardClick(idy: number) {
    this.empty = idy;
    this.getMessage(idy + 1);
    this.show = false;
    this.toggle=!this.toggle;
  }

  addMessage(id: number) {
    let value = { "userId": id, 'message': this.property }
    this.attendanceService.addMessage(value).subscribe((data: any) => {
      console.log(data, "Added data");
    })
    setTimeout(() => {
      this.getMessage(id);
    }, 500);
    // await this.getMessage(id);
  }

  getMessage(id: number) {
    this.msgVisible = true;
    this.attendanceService.getMessage(id).subscribe((data) => {
      console.log(data, "get data");
      this.messageArray = data;
      this.property = "";
    });
  }
  remove(id: number, userId: number) {
    console.log('HI', id)
    this.attendanceService.deleteMessage(id).subscribe((data: any) => {
      console.log(data);
    });
    setTimeout(() => {
      this.getMessage(userId);
    }, 500);
    // this.getMessage(userId);
  }
  onEdit(userId: number, data: string, id: number) {
    debugger
    this.mesgId = id;
    this.userid=userId
    this.formValue.controls['message'].setValue(data);
    console.log(data)
  }
  updateMesg() {
    debugger
    let value = {'userId':this.userid,'message':this.formValue.value.message}
    console.log(value['userId'])
    this.attendanceService.updateMessage(this.mesgId,value).subscribe(data=>{
      console.log(data,'UpdatedMesg');
    })
    let ref=document.getElementById("cancel");
    ref?.click();
    this.formValue.reset();
    setTimeout(() => {
      this.getMessage(this.userid);
    }, 500);
  }
}

