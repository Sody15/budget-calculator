import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Budget } from '@shared/budget';

import { budgetData } from './data';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  budgets = new BehaviorSubject<Budget[]>(budgetData);
  // budgets = new BehaviorSubject<Budget[]>([]);

  budgets$ = this.budgets.asObservable();

  private get budgetsArray() {
    return this.budgets.getValue();
  }

  private set budgetsArray(budgets: Budget[]) {
    this.budgets.next([...budgets]);
  }

  // Add budget to array
  addBudget(amt: number, desc: string) {
    let budgetValues = this.budgetsArray;
    if (amt > 0) {
      budgetValues.push({ amount: amt, description: desc, type: 'income' });
    } else {
      budgetValues.push({ amount: amt, description: desc, type: 'expense' });
    }
    this.budgetsArray = budgetValues;
  }

  getBudgetIndex(budget: Budget): number {
    return this.budgetsArray.findIndex(
      (b) =>
        b.amount === budget.amount &&
        b.description === budget.description &&
        b.type === budget.type
    );
  }

  // Replace value in array by index
  editBudget(index: number, amt: number, desc: string) {
    let budgetValues = this.budgetsArray;
    if (amt > 0) {
      budgetValues[index] = { amount: amt, description: desc, type: 'income' };
    } else {
      budgetValues[index] = { amount: amt, description: desc, type: 'expense' };
    }
    this.budgetsArray = budgetValues;
  }

  // Remove value in array by index
  deleteBudget(index: number) {
    let budgetValues = this.budgetsArray;
    budgetValues.splice(index, 1);
    this.budgetsArray = budgetValues;
  }
}
