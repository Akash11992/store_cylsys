import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
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
    HttpClientModule,

  ],
  exports:[
    HeaderComponent,
    LeftSidenavComponent,
    HomeBannerComponent,
    HomeFooterComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class SharedModule { }
