import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterService } from './counter_service';
import { CompB } from "./comp-b/comp-b";
import { CompA } from "./comp-a/comp-a";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CompB, CompA],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('service');
  counterService =inject(CounterService)
}
