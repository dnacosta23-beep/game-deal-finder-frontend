import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/SearchPage";
import SavedGamesPage from "./pages/SavedGamesPage";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<SearchPage />}
        />

        <Route
          path="/saved"
          element={<SavedGamesPage />}
        />
      </Routes>
    </>
  );
}

export default App;