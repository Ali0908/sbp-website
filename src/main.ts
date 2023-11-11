/// <reference types="@angular/localize" />
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';
import { DashboardComponent } from './app/Home Page/dashboard/dashboard.component';
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));