import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import cheerio from 'cheerio';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { link } = req.query;

  try {
    const response = await axios.get(link as string, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36',
      },
    });
    const $ = cheerio.load(response.data);

    // Scrape the whole part of the price
    const wholePart = $('span.a-price-whole').first().text().trim();

    // Scrape the fractional part of the price
    const fractionalPart = $('span.a-price-fraction').first().text().trim();

    // Remove the decimal point from the whole part
    const formattedWholePart = wholePart.replace('.', '');

    // Combine the formatted whole part and fractional part to form the complete price
    const price = `${formattedWholePart}.${fractionalPart}`;

    res.status(200).json({ price });
  } catch (error) {
    console.error('Error scraping price:', error);
    res.status(500).json({ error: 'Failed to scrape price' });
  }
}