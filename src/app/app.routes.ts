import { Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'portfolio',component:PortfolioComponent},
    {path:'contact',component:ContactComponent},
    {path:'resume',component:ResumeComponent},
    {path:'**',component:HomeComponent,pathMatch:'full'},
   

];
