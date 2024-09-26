import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Task } from '../../../types/task';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss',
})
export class TaskDetailComponent {
  @Output()
  CloseDetailView: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() currentTask: Task | null = null;

  OnCloseTaskDetail() {
    this.CloseDetailView.emit(false);
  }
}
