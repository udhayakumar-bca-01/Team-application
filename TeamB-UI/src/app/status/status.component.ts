import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../apply-attendance/data.service';
@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  formVal: any;

  formArr: any = [];

  JiraStatus = [{ value: 'Active' }, { value: 'Finished' }, { value: 'Test' }];
  JiraType = [{ value: 'Story' }, { value: 'Bug' }];
  displayedColumns: string[] = [];

  constructor(private dataService: DataService) {
    this.formVal = new FormGroup({
      date: new FormControl(''),
      jiraId: new FormControl(''),
      jiraType: new FormControl(''),
      jiraStatus: new FormControl(''),
      jiraDesc: new FormControl(''),
    });

    this.getValues();
  }
  ngOnInit(): void {

  }

  // getValues() {
  //   this.dataService.getJira().subscribe((res: any) => {
  //     this.formArr = res;
  //     console.log(this.formArr.value);
  //   });
  // }
  async getValues() {
    // this.show = !this.show;
    this.formArr = await this.dataService.getJira();
  }
  putValues($event: any) {
    let payload = this.formVal.value;
    console.log(payload);
    this.dataService.addJira(payload)
    // .subscribe(() => {
    //   this.getValues();
    // })
  }
}

