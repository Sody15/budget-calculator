import { Component, Output, EventEmitter } from '@angular/core';

import { Budget } from '@shared/budget';

@Component({
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent {
  budget!: Budget;
  selectedIndex!: number;

  @Output() close = new EventEmitter<null>();

  closeModal() {
    this.close.emit(null);
  }
}
