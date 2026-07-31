# Game Deal Finder Frontend

A React application that allows users to search for discounted PC games from multiple online stores and save their favorite deals.

The frontend communicates with a Flask backend, which retrieves data from the CheapShark API and stores saved games in Supabase.

---

## Live Demo

Frontend:
https://YOUR-CLOUDFRONT-URL

Backend API:
https://YOUR-RENDER-BACKEND.onrender.com

---

## Features

- Search for PC game deals
- Save favorite deals
-  Delete saved deals
-  View deals from multiple online stores
-  Display sale price, normal price, and savings percentage
-  Retro cyberpunk themed interface
-  Responsive layout

---

## Built With

- React
- React Router
- JavaScript
- Vite
- CSS
- Fetch API

---

## Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/game-deal-finder-frontend.git
```

Navigate into the project

```bash
cd game-deal-finder-frontend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
VITE_API_URL=https://YOUR-BACKEND.onrender.com
```

Run the development server

```bash
npm run dev
```

---

## Production Build

```bash
npm run build
```

The production build can be deployed to:

- AWS S3
- AWS CloudFront

---

## React Features Used

- Functional Components
- React Router
- useState
- useEffect
- API Requests
- Controlled Forms
- Conditional Rendering

---

## Backend Communication

The frontend communicates with the Flask backend using:

- GET requests
- POST requests
- DELETE requests

All API requests are made through:

```
src/services/api.js
```

---

## Future Improvements

- User authentication
- Sorting and filtering
- Wishlist categories
- Steam login integration
- Dark/Light themes