import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../../../types/task';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpClientModule,
} from '@angular/common/http';
import { TaskService } from '../../../services/task.service';
import { Subscription } from 'rxjs';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { CommonModule } from '@angular/common';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// import { AuthInterceptorService } from '../../../services/auth-interceptor.service';
// import { LoggingInterceptorService } from '../../../services/logging-interceptor.service';
@Component({
  selector: 'app-task-dashboard',
  standalone: true,
  imports: [
    CreateTaskComponent,
    TaskDetailComponent,
    CommonModule,
    // HttpClientModule,
  ],
  templateUrl: './task-dashboard.component.html',
  styleUrl: './task-dashboard.component.scss',
})
export class TaskDashboardComponent implements OnInit {
  showCreateTaskForm: boolean = false;
  showTaskDetails: boolean = false;
  // http: HttpClient = inject(HttpClient);
  allTasks: Task[] = [];
  taskService: TaskService = inject(TaskService);

  currentTaskId: string | undefined = '';
  isLoading: boolean = false;

  currentTask: Task | null = null;

  errorMessage: string | null = null;

  editMode: boolean = false;
  selectedTask: any;

  // constructor(private errorSub: Subscription) {}

  ngOnInit() {
    console.log('Task Dashboard');
    this.fetchAllTasks();
    // this.errorSub = this.taskService.errorSubject.subscribe({
    //   next: (httpError) => {
    //     this.setErrorMessage(httpError);
    //   },
    // });
  }

  ngOnDestroy() {
    // this.errorSub.unsubscribe();
  }

  OpenCreateTaskForm() {
    this.showCreateTaskForm = true;
    this.editMode = false;
    this.selectedTask = {
      title: '',
      desc: '',
      assignedTo: '',
      createdAt: '',
      priority: '',
      status: '',
    };
  }

  showCurrentTaskDetails(id: string | undefined) {
    this.showTaskDetails = true;
    this.taskService.getTaskDetails(id).subscribe({
      next: (data: any) => {
        this.currentTask = data;
      },
    });
  }

  CloseTaskDetails() {
    this.showTaskDetails = false;
  }

  CloseCreateTaskForm() {
    this.showCreateTaskForm = false;
  }

  CreateOrUpdateTask(data: Task) {
    if (!this.editMode) this.taskService.CreateTask(data);
    else this.taskService.UpdateTask(this.currentTaskId, data);
  }

  /*{
    key1: {},
    key2: {}
  }*/

  FetchAllTaskClicked() {
    this.fetchAllTasks();
  }

  private fetchAllTasks() {
    this.isLoading = true;
    this.taskService.GetAlltasks().subscribe({
      next: (tasks) => {
        this.allTasks = tasks;
        this.isLoading = false;
      },
      error: (error) => {
        this.setErrorMessage(error);
        this.isLoading = false;
      },
    });
  }

  private setErrorMessage(err: HttpErrorResponse) {
    if (err.error.error === 'Permission denied') {
      this.errorMessage = 'You do not have permisssion to perform this action';
    } else {
      this.errorMessage = err.message;
    }

    setTimeout(() => {
      this.errorMessage = null;
    }, 3000);
  }

  DeleteTask(id: string | undefined) {
    this.taskService.DeleteTask(id);
  }

  DeleteAllTask() {
    this.taskService.DeleteAllTasks();
  }

  OnEditTaskClicked(id: string | undefined) {
    this.currentTaskId = id;

    //OPEN EDIT TASK FORM
    this.showCreateTaskForm = true;
    this.editMode = true;

    this.selectedTask = this.allTasks.find((task) => {
      return task.id === id;
    });
  }
}
