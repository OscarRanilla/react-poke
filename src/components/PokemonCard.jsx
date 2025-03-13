// Mostramos el Pokemón que se encuentra, incluyendo su nombre, imagen etc.

import React from 'react';
import './PokemonCard.css';

function PokemonCard({ pokemon }) {
    // Convertimos altura y peso
    const heightInMeters = pokemon.height / 10; // Cambiamos la altura en metros (API devuelve decímetros)
    const weightInKg = pokemon.weight / 10; // Cambiamos el Peso a kg (API devuelve hectogramos)
    const weightInLbs = (weightInKg * 2.20462).toFixed(2); // Cambiamos el peso en libras

    return (
        <div className="pokemon-card">
            <h2>{pokemon.name.toUpperCase()}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p><strong>Altura:</strong> {heightInMeters} m ({heightInMeters * 100} cm)</p>
            <p><strong>Peso:</strong> {weightInKg} kg ({weightInLbs} lbs)</p>
            <p><strong>Habilidades:</strong> {pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
        </div>
    );
}

export default PokemonCard;