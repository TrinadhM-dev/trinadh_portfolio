import { Component, Input } from '@angular/core';
import { NgbModal,NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../../models/Project';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [NgbCarouselModule,CommonModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {
  @Input() project={} as Project;
  //prerequsites........
  constructor(private modalService: NgbActiveModal){

  }
  dismissModal() {
    this.modalService.dismiss();  // Dismisses the modal
  }
}
