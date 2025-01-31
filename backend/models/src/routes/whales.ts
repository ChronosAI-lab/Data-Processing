import express from 'express';
import { fetchSolanaTransactions } from '../services/solanaService';
import { filterWhaleTransactions } from '../services/whaleService';

const router = express.Router();

/**
 * Endpoint to fetch whale transactions.
 */
router.get('/:wallet', async (req, res) => {
  try {
    const transactions = await fetchSolanaTransactions(req.params.wallet);
    const whales = filterWhaleTransactions(transactions);
    res.json({ transactions, whales });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch whale transactions' });
  }
});

export default router;
