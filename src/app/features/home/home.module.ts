import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HeaderComponent } from '../../shared/components/header/header.component';
// import { LeftSidenavComponent } from '../../shared/components/left-sidenav/left-sidenav.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { SharedModule } from "../../shared/shared.module";
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { HomeBannerComponent } from 'src/app/shared/components/home-banner/home-banner.component';


@NgModule({
    declarations: [
        HomeMainComponent,
        // HeaderComponent,
        // LeftSidenavComponent,
        DashboardComponent,
        // HomeBannerComponent

    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ],
    // exports: [
    //   HeaderComponent,
    //   LeftSidenavComponent,
    //   HomeBannerComponent

    // ]
})
export class HomeModule { }
