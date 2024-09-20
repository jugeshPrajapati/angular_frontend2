import { Component } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs-example',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './rxjs-example.component.html',
  styleUrl: './rxjs-example.component.scss',
})
export class RxjsExampleComponent {
  array1 = [1, 3, 4, 5, 56, 56];
  array2 = ['fd', 'd'];
  data: any[] = [];
  observable1 = new Observable((observer) => {
    observer.next(this.array1);
    // observer.error(new Error('custom error'))
    observer.complete();
  });
  observable2 = of(this.array1, this.array2, 30, 'hello', true);
  observable3 = from(this.array1);
  transformObservale = this.observable3.pipe(
    map((val) => {
      return val * 5;
    })
  );
  filterObservale = this.observable3.pipe(
    filter((val, i) => {
      return val % 5 == 0;
    })
  );
  GetAsyncData() {
    this.filterObservale.subscribe({
      next: (val: any) => {
        console.log(val);
        this.data.push(val);
      },
      error(err) {
        alert(err.message);
      },
      complete() {
        alert('streaming complete');
      },
    });
  }
}
