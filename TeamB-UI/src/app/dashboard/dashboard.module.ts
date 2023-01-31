import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule, DatePipe } from "@angular/common";
@NgModule({
    imports: [
        DashboardRoutingModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatMenuModule,
        CommonModule
        
    ],
    declarations: [
        DashboardComponent,
        
    ],
    providers: [DatePipe]   
})
export class DashboardModule {}