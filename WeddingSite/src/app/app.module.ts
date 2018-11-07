import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageHeaderComponent } from './components/image-header/image-header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EntryCodeComponent } from './components/entry-code/entry-code.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageHeaderComponent,
    NavBarComponent,
    EntryCodeComponent,
    HomePageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
