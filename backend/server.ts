import express from 'express';
import transactionsRoutes from './models/src/routes/transactions';
import whalesRoutes from './models/src/routes/whales';

const app = express();
app.use(express.json());

// Routing
app.use('/api/transactions', transactionsRoutes);
app.use('/api/whales', whalesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
