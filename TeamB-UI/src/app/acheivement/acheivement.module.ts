import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcheivementComponent } from './acheivement.component';
import { AcheivementRoutingModule } from './acheivement-routing.module';
import {RatingModule} from 'primeng/rating';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {BreadcrumbModule} from 'primeng/breadcrumb';

@NgModule({
    declarations: [
        AcheivementComponent
    ],
    imports: [
      CommonModule,
      AcheivementRoutingModule,
      RatingModule,
      InputTextModule,
      ButtonModule,
      TableModule,
      ReactiveFormsModule,
      MatIconModule,
      MatCardModule,
      FormsModule,
      BreadcrumbModule
    ],
    exports: [
        AcheivementComponent
    ],
    providers: [],
  })

  export class AcheivementModule { }