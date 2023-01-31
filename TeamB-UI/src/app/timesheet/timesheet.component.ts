import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatTable } from '@angular/material/table';
import { AttendenceService } from './attendance.service';
import { DataService } from '../apply-attendance/data.service';
import { Subscription } from 'rxjs';
export interface PeriodicElement {
  In_Out: any;
  Date: any;
  Time: any;
  Shifts: any;
  id: any;
  Members: any;
}
@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<any> | undefined;
  dataSource: PeriodicElement[] = [];
  filterData: any = []
  newArr: any = [];
  flag: boolean = true;
  dateRef: any;
  visible: boolean = false;
  currentDate: any;
  currentTime: any;
  pipe: DatePipe | undefined;
  formForFilter: any;
  bgImage = true;
  fromDate1: any;
  selectedMember = '';
  toDate1: any;
  day = new Date();
  condition!: boolean;
  show = true;
  items: any;
  home: any;
  Today = "Today";
  message: string = ""
  userName: any;
  subscription!: Subscription;
  // ds = new MatTableDataSource(this.dataSource);
  displayedColumns: string[] = ['In_Out', 'Date', 'Time', 'Shifts', 'Members'];
  members = ['Udhaya', 'Harish', 'LNarayanan', 'Varsha', 'Marudhu']

  constructor(public datepipe: DatePipe, private attendService: AttendenceService, private data: DataService) {
    if (this.selectedMember == "") {
      this.condition = false;
    }
  }

  ngOnInit() {
    this.subscription = this.data.currentUser.subscribe(message => {
      this.message = message
    })
    console.log(this.message, "sub")
    this.dateRef = new Date();
    this.getDays();
    this.formForFilter = new UntypedFormGroup({
      fromDate: new UntypedFormControl('', { validators: [Validators.required] }),
      toDate: new UntypedFormControl('', { validators: [Validators.required] })
    });
    this.items = [
      { label: 'Timesheet' }
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

  get fromDate() { return this.formForFilter.get('fromDate')?.value; }
  get toDate() { return this.formForFilter.get('toDate')?.value; }

  applyFilter() {

    this.flag = false;
    console.log(this.filterData, 'shgihue');
    this.filterData.length = 0;
    this.fromDate1 = this.datepipe.transform(this.fromDate, ('MM-dd-yyyy'))
    this.toDate1 = this.datepipe.transform(this.toDate, ('MM-dd-yyyy'))
    this.filterData = this.dataSource.filter(e => e.Date >= this.fromDate1 && e.Date <= this.toDate1)
    console.log(this.filterData, 'filterData');
    this.table?.renderRows();
    // for(let i=0;i<this.dataSource.length;i++){
    //   if(this.dataSource[i].Date >= this.fromDate1 && this.dataSource[i].Date <=this.toDate1 ){
    //     this.filterData.push(this.dataSource[i])
    //   }
    //   this.table?.renderRows();
    // }
    console.log(this.filterData, 'filterData');
    this.table?.renderRows()

  }

  getDays() {
    this.attendService.allDays().subscribe((data: any) => {
      console.log("All Days", data);
      this.dataSource = data;
      this.dataSource.sort((a, b) => b.id - a.id);
    })
  }

  in() {
    if (this.visible == true) {
      this.visible = false
    }
    this.dateRef = new Date();
    this.currentDate = this.datepipe.transform(this.dateRef, 'MM-dd-yyyy')
    this.currentTime = this.datepipe.transform(this.dateRef, "HH:mm")

    let obj = { In_Out: "IN", Date: this.currentDate, Time: this.currentTime, Shifts: "Day", Members: this.selectedMember }
    console.log(obj, 'atgsdjr');
    this.attendService.addAttendence(obj).subscribe((data: any) => {
      console.log("Successfully Added", data);
      this.dataSource.push(data);
      this.dataSource.sort((a, b) => b.id - a.id);

      this.today();
      this.table?.renderRows();
    })

    console.log("Data", this.dataSource);
    this.table?.renderRows();
    this.selectedMember = '';
  }

  out() {
    if (this.visible == true) {
      this.visible = false
    }
    this.dateRef = new Date();
    this.currentDate = this.datepipe.transform(this.dateRef, 'MM-dd-yyyy')
    this.currentTime = this.datepipe.transform(this.dateRef, "HH:mm")

    let obj = { In_Out: "Out", Date: this.currentDate, Time: this.currentTime, Shifts: "Day", Members: this.selectedMember }
    console.log(obj);

    this.attendService.addAttendence(obj).subscribe((data: any) => {
      console.log("Successfully Added", data);
      this.dataSource.push(data);
      this.dataSource.sort((a, b) => b.id - a.id);

      this.today();
      this.table?.renderRows();
    })
    this.table?.renderRows();
    console.log("Data", this.dataSource);
    this.selectedMember = '';
  }

  today() {
    this.flag = false;
    if (this.visible == true) {
      this.visible = false
    }
    this.filterData.length = 0;
    let length = this.dataSource.length
    let today = this.datepipe.transform(this.dateRef, 'MM-dd-yyyy')
    for (let i = 0; i < length; i++) {
      if (this.dataSource[i].Date == today) {
        this.filterData.push(this.dataSource[i]);
      }
      this.table?.renderRows();
    }


  }

  allDay() {
    if (this.visible == true) {
      this.visible = false
    }
    this.flag = true;
    this.allDayFun()
    this.table?.renderRows();
  }
  allDayFun() {
    this.attendService.allDays().subscribe((data: any) => {
      this.dataSource = data;
      this.dataSource.sort((a, b) => b.id - a.id);
      this.table?.renderRows();
    })
  }
  openfilter() {
    this.visible = !this.visible;
  }
  onClick() {
    this.bgImage = !this.bgImage;
  }
  disablefFilter() {
    if (this.visible == true) {
      this.visible = false
    }
  }

  onChange() {
    this.show = false;
    this.selectedMember = this.message
  }


}