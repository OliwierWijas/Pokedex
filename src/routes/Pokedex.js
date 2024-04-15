import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Pokedex.css";
import "../index.css";
import "../model/Pokemon.js";
import Pokemon from "../model/Pokemon.js";

export default function Pokedex() {
  const [pokemonList, setPokemonList] = useState(null);
  const [{ startNumber, endNumber }, setNumber] = useState({
    startNumber: 1,
    endNumber: 20,
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(startNumber, endNumber)
      .then(setPokemonList)
      .catch((error) => console.log("Error fetching pokemons:", error));
  }, [startNumber, endNumber]);

  const handlePokemonClick = (pokemonName) => {
    navigate(`/pokemon/${pokemonName}`);
  };

  return (
    <>
      <div className="pokedex-container col-11">
        {pokemonList &&
          pokemonList.map((data) => {
            const pokemon = new Pokemon(data);
            return (
              <div
                className="pokemon-container col-12 col-sm-6 col-lg-3"
                key={pokemon.id}
              >
                <div
                  className={`pokemon-info col-11 ${pokemon.types.type0}`}
                  onClick={() => handlePokemonClick(pokemon.name)}
                >
                  <div>
                    <div className="pokemon-index">#{pokemon.id}</div>
                    <div className="pokemon-name">{pokemon.name}</div>
                  </div>
                  <img alt={pokemon.name} src={pokemon.smallImg} />
                </div>
              </div>
            );
          })}
      </div>

      <div>
        {startNumber !== 1 && (
          <button
            className="arrow-button"
            onClick={() =>
              setNumber((prevState) => ({
                startNumber: prevState.startNumber - 20,
                endNumber: prevState.endNumber - 20,
              }))
            }
          >
            <span className="arrow" role="img" aria-label="Previous">
              ◀
            </span>
          </button>
        )}

        <button
          className="arrow-button"
          onClick={() =>
            setNumber((prevState) => ({
              startNumber: prevState.startNumber + 20,
              endNumber: prevState.endNumber + 20,
            }))
          }
        >
          <span className="arrow" role="img" aria-label="Next">
            ▶
          </span>
        </button>
      </div>
    </>
  );
}

async function fetchData(startNumber, endNumber) {
  const promises = [];

  for (let i = startNumber; i <= endNumber; i++) {
    promises.push(getPokemon(i));
  }

  const responses = await Promise.all(promises);
  const data = await Promise.all(responses.map((response) => response.json()));

  return data;
}

function getPokemon(id) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
}
