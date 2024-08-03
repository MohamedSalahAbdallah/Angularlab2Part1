import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @Output() result = new EventEmitter<string>();
  search(e:Event) {
    this.result.emit((e.target as HTMLInputElement).value);
  }

}
