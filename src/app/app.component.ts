import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SortPipe } from './sort.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SortPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '6-sort-pipe';
  arrayToSort = ['eggplant', 'cucumber', 'potato', 'tomato', 'lettuce'];
  // arrayToSort = 1;

  isArray: boolean = Array.isArray(this.arrayToSort);
}
