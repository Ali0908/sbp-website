import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { DashboardComponent } from './Home Page/dashboard/dashboard.component';
import { ContactComponent } from './Home Page/contact/contact.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
