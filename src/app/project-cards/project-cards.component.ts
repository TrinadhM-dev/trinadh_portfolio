import { Component, Input } from '@angular/core';
import { Project } from '../../models/Project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-cards.component.html',
  styleUrl: './project-cards.component.css'
})
export class ProjectCardsComponent {
  @Input() project={} as Project;
}
