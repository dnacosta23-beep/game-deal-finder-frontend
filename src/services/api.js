const API_URL = "http://127.0.0.1:5000";

export async function searchDeals(gameTitle) {
  const response = await fetch(
    `${API_URL}/api/deals?title=${gameTitle}`
  );

  const deals = await response.json();

  return deals;
}

export async function saveDeal(deal) {
  const response = await fetch(`${API_URL}/api/saved-deals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(deal),
  });

  return await response.json();
}

