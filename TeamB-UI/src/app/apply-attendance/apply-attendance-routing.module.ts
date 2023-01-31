import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyAttendanceComponent } from './apply-attendance.component';

const routes: Routes = [
  {path: '', component: ApplyAttendanceComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplyAttendanceRoutingModule { }