import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ApplicationDetailsComponent } from './components/application-details/application-details.component';

const routes: Routes = [
 {
  path:'',
   component:HomeMainComponent,
   canActivate:[AuthGuard],

   children:[

   { path: 'dashboard', component: DashboardComponent },
   {path:'application',component:ApplicationDetailsComponent},
   { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
 ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
