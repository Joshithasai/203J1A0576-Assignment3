// counter.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="counter">
      <h2>Counter: {{ counter }}</h2>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
    </div>
  `,
  styles: [`
    .counter {
      display: inline-block;
      padding: 10px;
      background-color: #f0b2d8c4;
      border-radius: 8px;
    }
    button {
      margin: 7px;
      background-color: #b2f0d7f5;
    }
  `]
})
export class CounterComponent {
  counter = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}