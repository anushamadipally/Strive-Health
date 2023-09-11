import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FrameworkmanagementComponent } from './frameworkmanagement/frameworkmanagement.component';
import { ResearchmanagementComponent } from './researchmanagement/researchmanagement.component';
import { AskdoctorComponent } from './askdoctor/askdoctor.component';
import { KnowledgehubComponent } from './knowledgehub/knowledgehub.component';
import { PoliciesComponent } from './policies/policies.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ConfigComponent } from './config/config.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'sidenav',component:SidenavComponent,children:[
    {path:'',redirectTo:'usermanagement',pathMatch:'full'},
    {path:'user',component:UsermanagementComponent},
    {path:'framework',component:FrameworkmanagementComponent},
    {path:'research',component:ResearchmanagementComponent},
    {path:'askdoctor',component:AskdoctorComponent},
    {path:'knowledgehub',component:KnowledgehubComponent},
    {path:'policies',component:PoliciesComponent},
    {path:'analytics',component:AnalyticsComponent},
    {path:'config',component:ConfigComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
