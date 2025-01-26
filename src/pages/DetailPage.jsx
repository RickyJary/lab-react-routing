import { useParams, Link } from "react-router-dom";
import pokemons from "../data/pokemons.json";

const DetailPage = () => {
  const { id } = useParams();
  const pokemon = pokemons.find((p) => p.id === parseInt(id));

  if (!pokemon) {
    return <p>Pokémon no encontrado.</p>;
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>Tipo: {pokemon.type.join(", ")}</p>
      <p>{pokemon.description}</p>
      <Link to="/">Volver a la lista</Link>
    </div>
  );
};

export default DetailPage;
