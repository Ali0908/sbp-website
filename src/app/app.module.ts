import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Home Page/header/header.component';
import { DashboardComponent } from './Home Page/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './Home Page/carousel/carousel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { FaqComponent } from './Home Page/faq/faq.component';
import { MatTreeModule} from '@angular/material/tree';
import { ContactComponent } from './Home Page/contact/contact.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ErrorStateMatcher} from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FaqComponent,
    ContactComponent,
    CarouselComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule, 
    FormsModule,
    MatButtonModule,
    MatTreeModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
