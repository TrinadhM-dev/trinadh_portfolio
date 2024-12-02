import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { ProjectCardsComponent } from '../project-cards/project-cards.component';
import { Project } from '../../models/Project';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  project: Project = {
    id:0,
    name:'Sample Angular App',
    summary:'Test Description',
    description:'',
    projectLink:'',
    tags:['Angular','Typescript'],
    pictures:[]
  };
  constructor(private service:Title){
    this.service.setTitle('Trinadh Machanavazzala-Portfolio');
    }
}
