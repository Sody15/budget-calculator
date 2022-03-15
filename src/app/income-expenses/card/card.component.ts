import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Budget, BudgetType } from 'src/app/model/budget';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() description: string = '';
  @Input() amt: number = 0;
  @Input() type!: BudgetType;

  @Output() edit = new EventEmitter<Budget>();
  @Output() delete = new EventEmitter<Budget>();

  hover = false;

  get budget(): Budget {
    return {
      amount: this.amt,
      description: this.description,
      type: this.type,
    };
  }

  isExpense() {
    return this.type === 'expense';
  }

  editBudget() {
    this.edit.emit(this.budget);
  }

  deleteCard(evt: Event) {
    this.delete.emit(this.budget);
    evt.stopPropagation();
  }
}
