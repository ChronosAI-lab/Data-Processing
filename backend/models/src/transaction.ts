export interface Transaction {
    id: string;
    wallet: string;
    amount: number;
    token: string;
    timestamp: Date;
    anomalyScore?: number;
  }
  