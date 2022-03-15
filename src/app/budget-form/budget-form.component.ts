import { Budget } from './../model/budget';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.scss'],
})
export class BudgetFormComponent implements OnInit {
  form!: FormGroup;

  budget!: Budget;

  constructor(private fb: FormBuilder, private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.form = this.fb.group({
      amount: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  isValid() {
    return !this.form.valid;
  }

  save() {
    this.budgetService.addBudget(
      this.form.controls['amount'].value,
      this.form.controls['description'].value
    );
    this.form.reset();
  }
}
