import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { FrameworkmanagementComponent } from './frameworkmanagement/frameworkmanagement.component';
import { ResearchmanagementComponent } from './researchmanagement/researchmanagement.component';
import { AskdoctorComponent } from './askdoctor/askdoctor.component';
import { KnowledgehubComponent } from './knowledgehub/knowledgehub.component';
import { PoliciesComponent } from './policies/policies.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ConfigComponent } from './config/config.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { FrameworkDialogComponent } from './framework-dialog/framework-dialog.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavComponent,
    UsermanagementComponent,
    FrameworkmanagementComponent,
    ResearchmanagementComponent,
    AskdoctorComponent,
    KnowledgehubComponent,
    PoliciesComponent,
    AnalyticsComponent,
    ConfigComponent,
    FrameworkDialogComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatDialogModule,
    MatSelectModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
