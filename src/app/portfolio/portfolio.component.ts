import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { ProjectCardsComponent } from '../project-cards/project-cards.component';
import { Project } from '../../models/Project';
import { Tag } from '../../models/tag';
import { CommonModule } from '@angular/common'; // <-- Import this
import { ProjectsService } from '../_services/projects.service';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardsComponent,CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  constructor(private service:Title,private projectService:ProjectsService){
    this.service.setTitle('Trinadh Machanavazzala-Portfolio');
    }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
}
