import { Budget } from './model/budget';
import { BudgetService } from './budget.service';
import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  budgets$!: Observable<Budget[]>;

  constructor(private budgetService: BudgetService) {
    this.budgets$ = this.budgetService.budgets$;
  }
}
