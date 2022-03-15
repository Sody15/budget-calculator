import { Component, Output, EventEmitter } from '@angular/core';

import { Budget } from './../../model/budget';

@Component({
  selector: 'app-budget-modal',
  templateUrl: './budget-modal.component.html',
  styleUrls: ['./budget-modal.component.scss'],
})
export class BudgetModalComponent {
  budget!: Budget;
  selectedIndex!: number;

  @Output() close = new EventEmitter<null>();

  closeModal() {
    this.close.emit(null);
  }
}
