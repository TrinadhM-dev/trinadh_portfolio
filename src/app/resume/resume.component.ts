import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  constructor(private service:Title){
    this.service.setTitle('Trinadh Machanavazzala-Home');
    }
}
