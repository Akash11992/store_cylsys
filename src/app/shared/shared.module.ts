import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { LeftSidenavComponent } from './components/left-sidenav/left-sidenav.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LeftSidenavComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
