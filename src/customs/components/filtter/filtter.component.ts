import { Component ,Input, Output ,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatRadioModule,MatRadioChange} from '@angular/material/radio';

@Component({
  selector: 'app-filtter',
  standalone: true,
  imports: [MatRadioModule, FormsModule, ],
  templateUrl: './filtter.component.html',
  styleUrl: './filtter.component.scss'
})
export class FiltterComponent {
  
  @Input()   all :number =0 ;
  @Input() inStock :number =0 ;
  @Input() outOfStock :number =0;
  defaultSelect:string ="all";
  @Output() selectedFilter: EventEmitter<string>=  new EventEmitter<string>;
  radioChange(event: MatRadioChange) {
    // this.filter['property'] = event.value;
    this.selectedFilter.emit(event.value);
    console.log(event.value  );
}
}
