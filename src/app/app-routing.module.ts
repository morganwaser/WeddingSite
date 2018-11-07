import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryCodeComponent } from './components/entry-code/entry-code.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';

const appRoutes: Routes = [
  {
      path:'',
      component: EntryCodeComponent
  },
  {
      path:'home',
      component: HomePageComponent
  }
  ,
  {
      path:'about',
      component: AboutPageComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
