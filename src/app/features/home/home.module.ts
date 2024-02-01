import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { SharedModule } from "../../shared/shared.module";
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
    declarations: [
        HomeMainComponent,
        DashboardComponent,


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
