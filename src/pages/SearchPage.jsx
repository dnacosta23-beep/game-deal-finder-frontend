import { useState } from "react";
import { searchDeals, saveDeal } from "../services/api";

function SearchPage() {
  const [search, setSearch] = useState("");
  const [deals, setDeals] = useState([]);

  async function handleSearch() {
    const results = await searchDeals(search);

    const sortedDeals = [...results].sort(
      (a, b) => Number(a.sale_price) - Number(b.sale_price)
    );

    setDeals(sortedDeals);
  }

  async function handleSaveDeal(deal) {
    await saveDeal(deal);

    alert("Deal saved!");
  }

  return (
    <div className="app">
      <header className="game-header">
        <p className="system-text">SYSTEM READY</p>

        <h1>🎮 GAME DEAL FINDER</h1>

        <p className="tagline">
          FIND YOUR NEXT GAME
        </p>
      </header>

      <div className="search-console">
        <h2>SEARCH TERMINAL</h2>

        <label htmlFor="game-search">
          GAME TITLE
        </label>

        <div className="search-row">
          <input
            id="game-search"
            type="text"
            placeholder="Search for a game..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <button
            className="search-button"
            onClick={handleSearch}
          >
            ▶ SEARCH DATABASE
          </button>
        </div>
      </div>

      <p>You searched for: {search}</p>

      <div className="deals-list">
        {deals.map((deal) => (
          <div
            className="deal-card"
            key={deal.deal_url}
          >
            <img
              src={deal.thumb}
              alt={deal.title}
            />

            <h2>{deal.title}</h2>

            <p>Store: {deal.store}</p>

            <p>Sale Price: ${deal.sale_price}</p>

            <p>Normal Price: ${deal.normal_price}</p>

            <p>Savings: {deal.savings}%</p>

            <div className="card-buttons">
              <a
                className="arcade-button"
                href={deal.deal_url}
                target="_blank"
                rel="noreferrer"
              >
                🛒 VIEW DEAL
              </a>

              <button
                className="arcade-button"
                onClick={() => handleSaveDeal(deal)}
              >
                💾 SAVE DEAL
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;