import axios from 'axios';
import { Transaction } from '../models/transaction';

const SOLANA_API_URL = 'https://api.solana.com'; // Replace with actual API URL

/**
 * Fetch transactions from Solana API.
 */
export const fetchSolanaTransactions = async (wallet: string): Promise<Transaction[]> => {
  const response = await axios.get(`${SOLANA_API_URL}/accounts/${wallet}/transactions`);
  return response.data.map((tx: any) => ({
    id: tx.signature,
    wallet: tx.accountKeys[0],
    amount: tx.meta.preBalances[0] - tx.meta.postBalances[0],
    token: 'SOL',
    timestamp: new Date(tx.blockTime * 1000),
  }));
};
