import { Budget } from './../model/budget';
import { Component, Input, OnChanges, ViewContainerRef } from '@angular/core';
import { BudgetModalComponent } from './budget-modal/budget-modal.component';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-income-expenses',
  templateUrl: './income-expenses.component.html',
  styleUrls: ['./income-expenses.component.scss'],
})
export class IncomeExpensesComponent implements OnChanges {
  @Input() budgets!: Budget[];

  incomes: Budget[] = [];
  expenses: Budget[] = [];

  constructor(
    public viewContainerRef: ViewContainerRef,
    private budgetService: BudgetService
  ) {}

  ngOnChanges() {
    this.incomes = this.budgets.filter((b) => b.type === 'income');
    this.expenses = this.budgets.filter((b) => b.type === 'expense');
  }

  editBudget(budget: Budget) {
    const selectedIndex = this.budgetService.getBudgetIndex(budget);

    const componentRef =
      this.viewContainerRef.createComponent<BudgetModalComponent>(
        BudgetModalComponent
      );
    componentRef.instance.budget = budget;
    componentRef.instance.selectedIndex = selectedIndex;

    // Destroy Modal on Close
    componentRef.instance.close.subscribe(() => {
      componentRef.destroy();
    });
  }

  delete(budget: Budget) {
    const budgetIndex = this.budgetService.getBudgetIndex(budget);
    this.budgetService.deleteBudget(budgetIndex);
  }
}
