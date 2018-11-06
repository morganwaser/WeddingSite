import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityCodeComponent } from './components/security-code/security-code.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';

const routes: Routes = [
  {
    path:'',
    component: SecurityCodeComponent
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
