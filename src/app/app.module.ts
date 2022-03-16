import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TotalBudgetComponent } from './total-budget/total-budget.component';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { IncomeExpensesComponent } from './income-expenses/income-expenses.component';
import { CardComponent } from './income-expenses/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BudgetColorDirective } from './total-budget/budget-color.directive';
import { EditModalComponent } from './income-expenses/edit-modal/edit-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalBudgetComponent,
    BudgetFormComponent,
    IncomeExpensesComponent,
    CardComponent,
    BudgetColorDirective,
    EditModalComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
