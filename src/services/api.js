const API_URL = "http://127.0.0.1:5000";

export async function searchDeals(gameTitle) {
  const response = await fetch(
    `${API_URL}/api/deals?title=${gameTitle}`
  );

  const deals = await response.json();

  return deals;
}

export async function saveDeal(deal) {
  const response = await fetch(
    `${API_URL}/api/saved-deals`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deal),
    }
  );

  return await response.json();
}

export async function getSavedDeals() {
  const response = await fetch(
    `${API_URL}/api/saved-deals`
  );

  const savedDeals = await response.json();

  return savedDeals;
}


export async function deleteSavedDeal(id) {
  const response = await fetch(
    `${API_URL}/api/saved-deals/${id}`,
    {
      method: "DELETE",
    }
  );

  return await response.json();
}