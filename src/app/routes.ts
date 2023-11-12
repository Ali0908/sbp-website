import { Routes } from '@angular/router';
import { DashboardComponent } from './Home Page/dashboard/dashboard.component';
import { ContactComponent } from './Home Page/contact/contact.component';

const routeConfig: Routes = [
    {
      path: '',
      component: DashboardComponent,
      title: 'Home page'
    },
    {
      path: 'contact',
      component: ContactComponent,
      title: 'Contact'
    }
  ];
  
  export default routeConfig;