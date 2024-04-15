import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/PokemonDetails.css";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pokemon from "../model/Pokemon.js";

export default function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        const newPokemon = new Pokemon(data);
        setPokemon(newPokemon);
      })
      .catch((error) => {
        console.error("Error fetching Pokemon details:", error);
      });
  }, [name]);

  return (
    <div>
      {pokemon ? (
        <div className={`pokemon-container col-12 ${pokemon.types.type0}`}>
          <div className="pokemon-picture-container">
            <h2 className={`${pokemon.types.type0}`}>{name}</h2>
            <img
              alt={name}
              src={`${pokemon.img}`}
              style={{
                width: "300p",
                height: "300px",
                aspectRatio: "auto 300 / 300",
              }}
            />
            <div className={`type ${pokemon.types.type0}`}>
              {pokemon.types.type0}
            </div>
            {pokemon.types.type1 && (
              <div className={`type ${pokemon.types.type1}`}>
                {pokemon.types.type1}
              </div>
            )}
          </div>

          <div className="pokemon-stats-container">
            <h3 id="stats">Base Stats</h3>
            <div className="pokemon-stats">
              <p>HP</p>
              <div className="bar">
                <div className="fill" style={{ width: `${pokemon.hp}%` }}></div>
              </div>
            </div>
            <div className="pokemon-stats">
              <p>Attack</p>
              <div className="bar">
                <div
                  className="fill"
                  style={{ width: `${pokemon.attack}%` }}
                ></div>
              </div>
            </div>
            <div className="pokemon-stats">
              <p>Defence</p>
              <div className="bar">
                <div
                  className="fill"
                  style={{ width: `${pokemon.defence}%` }}
                ></div>
              </div>
            </div>
            <div className="pokemon-stats">
              <p>Special Attack</p>
              <div className="bar">
                <div
                  className="fill"
                  style={{ width: `${pokemon.specialAttack}%` }}
                ></div>
              </div>
            </div>
            <div className="pokemon-stats">
              <p>Special Defence</p>
              <div className="bar">
                <div
                  className="fill"
                  style={{ width: `${pokemon.specialDefence}%` }}
                ></div>
              </div>
            </div>
            <div className="pokemon-stats">
              <p>Speed</p>
              <div className="bar">
                <div
                  className="fill"
                  style={{ width: `${pokemon.speed}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
