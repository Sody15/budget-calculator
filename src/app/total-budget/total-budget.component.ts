import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-budget',
  templateUrl: './total-budget.component.html',
  styleUrls: ['./total-budget.component.scss'],
})
export class TotalBudgetComponent implements OnInit {
  total: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
