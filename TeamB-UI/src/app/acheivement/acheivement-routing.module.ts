import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcheivementComponent } from './acheivement.component';

const routes: Routes = [
  {path: '', component: AcheivementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcheivementRoutingModule { }