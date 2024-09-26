import {
  AfterContentChecked,
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  ViewChild,
  Input,
  ElementRef,
  ContentChild,
  SimpleChanges,
  AfterViewInit,
} from '@angular/core';
import { NgSwitchExComponent } from '../ng-switch-ex/ng-switch-ex.component';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [NgSwitchExComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent
  implements
    AfterViewInit,
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked
{
  @Input() message!: string;
  //viewchild monitor element in same component
  @ViewChild('temp') tempPara!: ElementRef;
  @ContentChild('temp') paraContent!: ElementRef;
  constructor() {
    console.log('this is constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChange called');
  }
  ngOnInit(): void {
    console.log('ngOnInit called');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called');
    console.log('ngDoCheck', this.paraContent);
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    console.log('ngAfterContentInit called', this.paraContent.nativeElement);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
    console.log('ngAfterContentChecked called', this.tempPara);
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log('ngAfterViewInit called', this.tempPara.nativeElement);
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
