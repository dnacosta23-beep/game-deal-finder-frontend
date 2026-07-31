import { useEffect, useState } from "react";
import { getSavedDeals, deleteSavedDeal, } from "../services/api";

function SavedGamesPage() {
  const [savedDeals, setSavedDeals] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadSavedDeals() {
      const results = await getSavedDeals();

      setSavedDeals(results);
    }

    loadSavedDeals();
  }, []);

  async function handleDeleteDeal(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this saved deal?"
    );

    if (!confirmed) {
      return;
    }

    await deleteSavedDeal(id);

    const updatedDeals = await getSavedDeals();

    setSavedDeals(updatedDeals);
  }

  const filteredDeals = savedDeals.filter((deal) =>
    deal.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="saved-games-page">
      <h1>💾 SAVED GAMES</h1>

      <div className="saved-search">
        <label htmlFor="saved-game-search">
          SEARCH SAVED GAMES
        </label>

        <input
          id="saved-game-search"
          type="text"
          placeholder="Search your saved games..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="deals-list">
        {filteredDeals.map((deal) => (
          <div
            className="deal-card"
            key={deal.id}
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

            <button
              className="arcade-button"
              onClick={() => handleDeleteDeal(deal.id)}
            >
              🗑 DELETE DEAL
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedGamesPage;