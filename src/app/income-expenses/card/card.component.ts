import { Component, Input, OnInit } from '@angular/core';
import { BudgetType } from 'src/app/model/budget';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() description: string = '';
  @Input() amt: number = 0;
  @Input() type!: BudgetType;
  hover = false;

  isExpense() {
    return this.type === 'expense';
  }
}
