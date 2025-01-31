import { IsolationForest } from 'isolation-forest';
import { Transaction } from '../models/transaction';

/**
 * Train the Isolation Forest model with transaction data.
 * @param transactions - List of transactions.
 * @returns List of transactions with anomaly scores.
 */
export const detectAnomalies = (transactions: Transaction[]) => {
  if (transactions.length === 0) return [];

  // Convert transactions into numerical format for model input
  const data = transactions.map(tx => [tx.amount]);

  // Train Isolation Forest model
  const model = new IsolationForest();
  model.fit(data);

  // Get anomaly scores
  const scores = model.anomalyScore(data);

  // Return transactions with anomaly scores
  return transactions.map((tx, index) => ({
    ...tx,
    anomalyScore: scores[index]
  })).filter(tx => tx.anomalyScore > 0.8);  // Threshold 0.8 for anomaly detection
};
