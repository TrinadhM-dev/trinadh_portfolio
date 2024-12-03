import { Component, Input } from '@angular/core';
import { Project } from '../../models/Project';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-cards.component.html',
  styleUrl: './project-cards.component.css'
})
export class ProjectCardsComponent {
  @Input() project={} as Project;

  constructor(private modalService: NgbModal){ }

  OpenProjectModal() {
    const modalRef = this.modalService.open(ProjectModalComponent, {
      size: 'lg'  // Modal size
    });
// Pass the project data to the modal instance
modalRef.componentInstance.project = this.project;
  }
}
