import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetRoutingModule } from './timesheet-routing.module';
import { TimesheetComponent } from './timesheet.component';
import {MatIconModule} from '@angular/material/icon';
import{ MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { TimeFormatPipe } from './dateConverter.pipe';
import {BreadcrumbModule} from 'primeng/breadcrumb';

@NgModule({
    declarations: [
        TimesheetComponent,TimeFormatPipe
    ],
    imports: [
        TimesheetRoutingModule,
        CommonModule,
        MatIconModule,
        MatTableModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,MatNativeDateModule,FormsModule,BreadcrumbModule
    ],
    exports: [
        TimesheetComponent
    ],
    providers: [],
  })

  export class TimesheetModule { }