import { Component,inject } from '@angular/core';
import { CounterService } from '../counter_service';


@Component({
  selector: 'app-comp-a',
  imports: [],
  templateUrl: './comp-a.html',
  styleUrl: './comp-a.scss',
  providers:[CounterService]
})
export class CompA {
  counterService = inject(CounterService)
}
