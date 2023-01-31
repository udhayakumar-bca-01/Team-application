import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyAttendanceComponent } from './apply-attendance.component';
import { ApplyAttendanceRoutingModule } from './apply-attendance-routing.module';
import { TabViewModule } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';
import { MatDividerModule } from '@angular/material/divider';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';

import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';

@NgModule({
  declarations: [
    ApplyAttendanceComponent

  ],
  imports: [
    ApplyAttendanceRoutingModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    TabViewModule,
    CalendarModule,
    MatDividerModule,
    InputTextareaModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatIconModule,
    BreadcrumbModule,
    FullCalendarModule
    
  ],
  exports: [
    ApplyAttendanceComponent,
  ],
  providers: [],
})

export class ApplyAttendanceModule { }