import { Directive, ElementRef, Input } from '@angular/core';

const COLOR = {
  INCOME: '#6AD681',
  EXPENSE: '#FF6139',
};

@Directive({
  selector: '[appBudgetColor]',
})
export class BudgetColorDirective {
  @Input() total!: number;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    if (this.total > 0) {
      this.el.nativeElement.style.color = COLOR.INCOME;
    } else {
      this.el.nativeElement.style.color = COLOR.EXPENSE;
    }
  }
}
