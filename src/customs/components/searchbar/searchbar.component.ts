import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
  OnInit,
  Inject,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SearchDataService } from '../../services/search-data.service';
import { RouterLink, QueryParamsHandling } from '@angular/router';
@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatAutocompleteModule,
    RouterLink,
  ],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss',
})
export class SearchbarComponent {
  constructor(private searchService: SearchDataService) {}

  myControl = new FormControl('');
  searchText: string = '';

  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
  // viewchild first argument, read : use it to read token from the queried from element
  // static: it determine when the query is resolved , false when resolved on change
  // @ViewChild(componentName) variable : componentName; or we can use this

  @ViewChild('templateInputRef', { static: true })
  searchChildElement!: ElementRef;

  emitChange(templateInputRef: HTMLInputElement) {
    this.onSearch.emit(this.searchText);
    console.log(`from template ref variable ${templateInputRef.value} ,this is ngModel change ${this.searchText}
      this is from view child component ${this.searchChildElement.nativeElement.value}`);
  }

  sendSearchText() {
    //send data to service function which will emit data
    this.searchService.OnItemSearch(this.searchText);
  }
}
