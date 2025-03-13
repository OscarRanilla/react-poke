// Aquí manejaremos todas las llamadas a la API de Pokémon

export const fetchPokemon = async (pokemonName) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
        if (!response.ok) {
            throw new Error('Pokemon no encontrado');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};