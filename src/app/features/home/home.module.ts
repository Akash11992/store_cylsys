import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { SharedModule } from "../../shared/shared.module";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ApplicationDetailsComponent } from './components/application-details/application-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
    declarations: [
        HomeMainComponent,
        DashboardComponent,
        ApplicationDetailsComponent,


    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        NgbModule,
        NgbRatingModule
    ],
    // exports: [
    //   HeaderComponent,
    //   LeftSidenavComponent,
    //   HomeBannerComponent

    // ]
})
export class HomeModule { }
