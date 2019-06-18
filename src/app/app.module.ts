import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ApiService } from './service/api.service';
import { AppMaterialModule } from './app-material/app-material.module';
import { AlertComponent } from './alert/alert.component';
import { NotificationService } from './alert/toastr-notification.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CandidateEntryComponent } from './candidate-entry/candidate-entry.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    NavbarComponent,
    PagenotfoundComponent,
    CandidateEntryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,    
    FormsModule,
    HttpClientModule,
    AppMaterialModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  providers: [ApiService,NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
