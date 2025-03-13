// Gestionamos los estados y renderizamos los componentes principales
import { useState, useEffect } from 'react';
import './App.css';
import { fetchPokemon } from './services/pokeAPI.js';
import PokemonCard from './components/PokemonCard';

function App() {
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (search === '') {
            setPokemon(null);
            setError('Introduce el nombre de un Pokémon');
            return;
        }

        const fetchData = async () => {
            setLoading(true);
            setError('');
            try {
                const result = await fetchPokemon(search);
                setPokemon(result);
            } catch (error) {
                setError(error.message);
                setPokemon(null);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [search]);

    return (
        <div>
            <h1>Buscador de Pokémon</h1>
            <input
                type="text"
                placeholder="Escribe el nombre de un Pokémon..."
                aria-label="Buscador de Pokémon"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {loading && <p>Cargando...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {pokemon && <PokemonCard pokemon={pokemon} />}
        </div>
    );
}

export default App;

