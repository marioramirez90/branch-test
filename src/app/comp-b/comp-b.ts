import { Component,inject } from '@angular/core';
import { CounterService } from '../counter_service';

@Component({
  selector: 'app-comp-b',
  imports: [],
  templateUrl: './comp-b.html',
  styleUrl: './comp-b.scss',
  providers:[CounterService]
})
export class CompB {
  counterService = inject(CounterService)
}
