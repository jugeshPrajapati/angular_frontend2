import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { SetBackground } from '../../directives/setBG.directive';
import { RxjsExampleComponent } from '../rxjs-example/rxjs-example.component';
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, CommonModule, SetBackground, RxjsExampleComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  inputVal: string = '';
  toDestroy: boolean = false;
  constructor() {
    console.log('this is parent constructor');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit hook of parent');
  }
  onBtnClicked(inputRef: HTMLInputElement) {
    this.inputVal = inputRef.value;
  }
  DestroyComponent() {
    this.toDestroy = !this.toDestroy;
  }
}
