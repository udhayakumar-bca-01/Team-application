import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatusComponent } from './status.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { StatusRoutingModule } from './status-routing.module';
import {MatDividerModule} from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [
        StatusComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatSelectModule,
        StatusRoutingModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule
    ],
    providers: [],
})

  export class StatusModule { }