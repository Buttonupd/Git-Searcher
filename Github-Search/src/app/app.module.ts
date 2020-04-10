import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
// import {HttpHeaders} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileService } from './services/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    // ProfileService,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpHeaders
     
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
