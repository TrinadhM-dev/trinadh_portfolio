import { Injectable } from '@angular/core';
import { Project } from '../../models/Project';
import { Tag } from '../../models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {id:0,name:'Sample Angular App',summary:'Test Description',description:'Learnt Learnt..........',projectLink:'',tags:[Tag.ANGULAR,Tag.TYPESCRIPT],pictures:["assets/img3.png","assets/img2.png","assets/img1.png"]},
    {id:1,name:'Sample React Quiz App',summary:'Its a cool Quiz app',description:'Im still working on it',projectLink:'',tags:[Tag.REACT,Tag.NODEJS],pictures:["assets/img3.png","assets/img2.png","assets/img1.png"]}
];
  constructor() { }

  GetProjects(){
    return this.projects
  }
  GetProjectById(id:number) : Project{
    let project = this.projects.find(project => project.id === id);

    if(project === undefined) {
      throw new TypeError("there is no project that matches the current id"+ id);
    }
    return project;
  }
}
