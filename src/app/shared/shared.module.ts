import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { LeftSidenavComponent } from './components/left-sidenav/left-sidenav.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LeftSidenavComponent,
    HomeBannerComponent,
    HomeFooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports:[
    HeaderComponent,
    LeftSidenavComponent,
    HomeBannerComponent,
    HomeFooterComponent
  ]
})
export class SharedModule { }
