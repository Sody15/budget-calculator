import { Budget } from './model/budget';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  budgets = new BehaviorSubject<Budget[]>([
    {
      amount: 9000,
      description: 'Salary',
      type: 'income',
    },
    {
      amount: -10,
      description: 'Pet Fee',
      type: 'expense',
    },
    {
      amount: -3000,
      description: 'TV',
      type: 'expense',
    },
  ]);
  budgets$ = this.budgets.asObservable();

  addBudget(amt: number, desc: string) {
    console.log(amt, desc);
    let budgetValues = this.budgets.getValue();
    if (amt > 0) {
      budgetValues.push({ amount: amt, description: desc, type: 'income' });
    } else {
      budgetValues.push({ amount: amt, description: desc, type: 'expense' });
    }
    this.budgets.next([...budgetValues]);
  }
}
