
type Pokemon = {
  pokedex: {
    number: string;
    name: string;
  }[];
};

export function PokemonList({ pokedex }: Pokemon) {
  const character = pokedex.map((pokemon) => (
    <li key={pokemon.name}>{pokemon.name}</li>
  ));

  return (
    <>
      <ul>{character} </ul>
    </>
  );
}
