import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// *** Additional Angular Imports Here *** //
// import { HttpModule } from '@angular/http';    For Http Service Calls
// import {FormsModule} from '@angular/forms';    For Form Inputs
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ImageheaderComponent } from './components/imageheader/imageheader.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { SecurityCodeComponent } from './components/security-code/security-code.component';

@NgModule({
  declarations: [
    AppComponent,
                  NavbarComponent, 
                  ImageheaderComponent,
                  AboutPageComponent,
                  HomePageComponent,
                  SecurityCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
