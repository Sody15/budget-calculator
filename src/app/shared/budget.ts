export type BudgetType = 'income' | 'expense';

export interface Budget {
  amount: number;
  description: string;
  type: BudgetType;
}
