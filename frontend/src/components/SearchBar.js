import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

export default function SearchBar() {
  const [searchType, setSearchType] = useState("name");
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Pentru imagine, doar UI (MVP)
    if (searchType === "image") {
      alert("Funcționalitatea de căutare după imagine va fi disponibilă în curând!");
      return;
    }

    // Redirect cu query string
    navigate(`/map?type=${searchType}&q=${encodeURIComponent(input)}`);
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <select
        className="searchbar__select"
        value={searchType}
        onChange={e => setSearchType(e.target.value)}
      >
        <option value="name">Nume locație</option>
        <option value="coords">Coordonate GPS</option>
        <option value="image">Imagine</option>
      </select>
      {searchType !== "image" ? (
        <input
          className="searchbar__input"
          type="text"
          placeholder={
            searchType === "name"
              ? "Ex: București, Paris..."
              : "Ex: 44.4268, 26.1025"
          }
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      ) : (
        <input
          className="searchbar__input"
          type="file"
          accept="image/*"
          onChange={() => setInput("imagine")}
        />
      )}
      <button className="searchbar__btn" type="submit">Caută</button>
    </form>
  );
}
