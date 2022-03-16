import { Component, Input, OnChanges } from '@angular/core';

import { Budget } from '@shared/budget';

@Component({
  selector: 'app-total-budget',
  templateUrl: './total-budget.component.html',
  styleUrls: ['./total-budget.component.scss'],
})
export class TotalBudgetComponent implements OnChanges {
  @Input() budgets!: Budget[];

  total: number = 0;

  ngOnChanges() {
    this.total = this.budgets.reduce((prev, curr) => prev + curr.amount, 0);
  }
}
