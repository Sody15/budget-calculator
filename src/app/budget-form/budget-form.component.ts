import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Budget } from '@shared/budget';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.scss'],
})
export class BudgetFormComponent implements OnInit {
  @Input() formType!: 'add' | 'edit';

  @Input() budget?: Budget;
  @Input() selectedIndex?: number;

  @Output() save = new EventEmitter<null>();

  form!: FormGroup;

  constructor(private fb: FormBuilder, private budgetService: BudgetService) {}

  get amount() {
    return this.form.controls['amount'].value;
  }

  get description() {
    return this.form.controls['description'].value;
  }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    if (this.budget) {
      this.form = this.fb.group({
        amount: [this.budget.amount, Validators.required],
        description: [this.budget.description, Validators.required],
      });
    } else {
      this.form = this.fb.group({
        amount: ['', Validators.required],
        description: ['', Validators.required],
      });
    }
  }

  isValid() {
    return !this.form.valid;
  }

  submit() {
    if (this.formType === 'add') {
      this.add();
    } else {
      this.edit();
    }

    this.form.reset();
  }

  add() {
    this.budgetService.addBudget(this.amount, this.description);
  }

  edit() {
    if (this.budget) {
      this.budgetService.editBudget(
        this.selectedIndex!,
        this.amount,
        this.description
      );
      this.save.emit(null);
    }
  }
}
