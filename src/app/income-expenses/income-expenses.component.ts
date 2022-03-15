import { Budget } from './../model/budget';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-income-expenses',
  templateUrl: './income-expenses.component.html',
  styleUrls: ['./income-expenses.component.scss'],
})
export class IncomeExpensesComponent implements OnChanges {
  @Input() budgets!: Budget[];

  incomes: Budget[] = [];
  expenses: Budget[] = [];

  ngOnChanges() {
    this.incomes = this.budgets.filter((b) => b.type === 'income');
    this.expenses = this.budgets.filter((b) => b.type === 'expense');
    console.log('incomes - ' + this.incomes);
    console.log('expenses - ' + this.expenses);
  }
}
