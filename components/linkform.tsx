import { useState } from "react";
import axios from "axios";

const LinkForm = () => {
  const [link, setLink] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [price, setPrice] = useState("");
  const [exchangeRate, setExchangeRate] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Regular expressions to match Amazon UK and eBay UK links
    const amazonUkRegex = /^https?:\/\/(www\.)?amazon\.co\.uk\/.*$/i;
    const ebayUkRegex = /^https?:\/\/(www\.)?ebay\.co\.uk\/.*$/i;
    if (amazonUkRegex.test(link) || ebayUkRegex.test(link)) {
      try {
        const [priceResponse, exchangeRateResponse] = await Promise.all([
          axios.get(`/api/scrape-price?link=${encodeURIComponent(link)}`),
          axios.get("/api/exchange-rate"),
        ]);
        const scrapedPrice = priceResponse.data.price;
        const exchangeRate = exchangeRateResponse.data.exchangeRate;
        setPrice(scrapedPrice);
        setExchangeRate(exchangeRate);
        setErrorMessage("");
      } catch (error) {
        console.error("Error fetching price or exchange rate:", error);
        setPrice("");
        setExchangeRate(0);
        setErrorMessage(
          "Failed to fetch the price or exchange rate. Please try again."
        );
      }
    } else {
      setPrice("");
      setErrorMessage("Please enter a valid Amazon UK or eBay UK link.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            id="link-input"
            className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Paste Amazon UK or eBay UK link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-0 top-0 bottom-0 px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>
      </form>
      {price && (
        <>
          <p className="mt-4 text-xl font-bold">
          🇬🇧 Price: <span className="text-green-500">£{price}</span>
          </p>
          <p className="mt-2 mb-4 text-xl font-bold">
          🇹🇷 Price:{" "}
            <span className="text-green-500">
              ₺{(parseFloat(price) * exchangeRate).toFixed(2)}
            </span>
          </p>
        </>
      )}
      {errorMessage && (
        <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default LinkForm;
