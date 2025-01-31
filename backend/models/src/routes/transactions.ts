import express from 'express';
import { fetchSolanaTransactions } from '../services/solanaService';
import { detectAnomalies } from '../services/anomalyModel';

const router = express.Router();

/**
 * Endpoint to fetch transactions and detect anomalies.
 */
router.get('/:wallet', async (req, res) => {
  try {
    const transactions = await fetchSolanaTransactions(req.params.wallet);
    const anomalies = detectAnomalies(transactions);
    res.json({ transactions, anomalies });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
});

export default router;
