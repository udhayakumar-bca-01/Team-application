import { NgModule } from '@angular/core';
import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
      NavbarRoutingModule,
      CommonModule

    ],
    exports: [
        NavbarComponent
    ],
    providers: [],
  })

  export class NavbarModule { }