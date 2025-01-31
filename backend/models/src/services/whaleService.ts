import { Transaction } from '../models/transaction';

/**
 * Filter whale transactions (e.g., transactions above 1000 SOL).
 */
export const filterWhaleTransactions = (transactions: Transaction[]) => {
  return transactions.filter(tx => tx.amount > 1000);
};
