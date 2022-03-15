import { Component, Input, OnInit } from '@angular/core';

export type CardType = 'income' | 'expense';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() description: string = '';
  @Input() amt: number = 0;
  @Input() type!: CardType;

  isExpense() {
    return this.type === 'expense';
  }
}
