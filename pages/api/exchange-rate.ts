import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Fetch the live exchange rate from an API
    const response = await axios.get('https://api.exchangerate-api.com/v4/latest/GBP');
    const exchangeRate = response.data.rates.TRY;

    res.status(200).json({ exchangeRate });
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    res.status(500).json({ error: 'Failed to fetch exchange rate' });
  }
}