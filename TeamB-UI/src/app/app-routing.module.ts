import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () =>
      // import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      import('./login/login.module').then(m => m.LoginModule)
  },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'timesheet', loadChildren: () => import('./timesheet/timesheet.module').then(m => m.TimesheetModule) },
  { path: 'acheivement', loadChildren: () => import('./acheivement/acheivement.module').then(m => m.AcheivementModule) },
  { path: 'attendance', loadChildren: () => import('./apply-attendance/apply-attendance.module').then(m => m.ApplyAttendanceModule) },
  { path: 'status', loadChildren: () => import('./status/status.module').then(m => m.StatusModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
