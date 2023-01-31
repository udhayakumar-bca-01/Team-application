import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcheivementComponent } from './acheivement.component';
import { CommonModule } from '@angular/common';
import { AcheivementRoutingModule } from './acheivement-routing.module';
import {RatingModule} from 'primeng/rating';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
describe('AcheivementComponent', () => {
  let component: AcheivementComponent;
  let fixture: ComponentFixture<AcheivementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
      BreadcrumbModule,
      HttpClientModule,
      HttpClientTestingModule,
      RouterTestingModule,
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcheivementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Card Click Function',()=>{
    component.cardClick(4)
    expect(component.empty).toBe(4)
  })

  it('UpDate Message',()=>{
    component.updateMesg()
    expect(component.formValue.value.message).toBe('');
  })
});
