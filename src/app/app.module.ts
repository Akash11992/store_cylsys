import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from "../app/shared/shared.module";
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    SharedModule,
    CoreModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
