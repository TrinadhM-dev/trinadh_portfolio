import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ResumeComponent } from './resume/resume.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgbNavModule,HeaderComponent,NavComponent,ResumeComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trinadh_portfolio';
  active =1 ;
}
