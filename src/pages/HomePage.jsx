import { Link } from "react-router-dom";
import pokemons from "../data/pokemons.json";
import { useState } from "react";

const HomePage = () => {
  const [selectedType, setSelectedType] = useState("");
  const allTypes = [];
  pokemons.forEach((pokemon) => {
    pokemon.type.forEach((type) => {
      if (!allTypes.includes(type)) {
        allTypes.push(type);
      }
    });
  });

  const filteredPokemons = selectedType
    ? pokemons.filter((pokemon) => pokemon.type.includes(selectedType))
    : pokemons;

  return (
    <div>
      <h1>Lista de Pokémon</h1>

      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <label htmlFor="type-filter">Filtrar por tipo:</label>
        <select
          id="type-filter"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          style={{ marginLeft: "10px" }}
        >
          <option value="">Todos</option>
          {allTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <ul>
        {filteredPokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Link to={`/pokemon/${pokemon.id}`}>
              <img src={pokemon.image} alt={pokemon.name} />
              <p>{pokemon.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
