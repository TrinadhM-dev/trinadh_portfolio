import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../../models/Project';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbCarouselModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

 featuredProject = {} as Project;
constructor(private service:Title,private projectService : ProjectsService){
this.service.setTitle('Trinadh Machanavazzala-Home');
}
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(1);
  }
}
