import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-ng-switch-ex',
  standalone: true,
  imports: [MatChipsModule, CommonModule, FormsModule],
  templateUrl: './ng-switch-ex.component.html',
  styleUrl: './ng-switch-ex.component.scss',
})
export class NgSwitchExComponent {
  tab: string = '';
  constructor() {
    console.log('constructor onswitch called', this.tab);
  }
  ngOnChanges(): void {
    //ngOnChanges work on input variable
    console.log('on change onswitch called', this.tab);
  }
  //content check work on change in view
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked onswitch called', this.tab);
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked onswitch called', this.tab);
  }
}
