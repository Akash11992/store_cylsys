import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from "../app/shared/shared.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
// import { HeaderComponent } from './shared/components/header/header.component';
// import { LeftSidenavComponent } from './shared/components/left-sidenav/left-sidenav.component';
// import { HomeBannerComponent } from './shared/components/home-banner/home-banner.component';


@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // LeftSidenavComponent,
    // HomeBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUiLoaderModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
