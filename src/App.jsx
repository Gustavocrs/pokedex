import { useEffect, useState } from "react";
import { CardPokemonBase } from "./components/CardPokemonBase";
import { CardPokemonCalc } from "./components/CardPokemonCalc";
import { CardPokemonFoto } from "./components/CardPokemonFoto";
import { Container } from "./ui/Container";
import axios from "axios";
import { GlobalStyle } from "./components/GlobalStyle";

export default function App() {
  const [api, setApi] = useState(false);
  const [pokemon, setPokemon] = useState("");

  useEffect(() => {
    getApi("bulbasaur");
  }, []);

  const getApi = async (nome) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${nome}`;
    await axios
      .get(url)
      .then((res) => {
        setApi(true);
        setPokemon(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <GlobalStyle />
      {api ? <CardPokemonBase dados={pokemon} /> : "Aguarde..."}
      {api ? <CardPokemonFoto dados={pokemon} /> : "Aguarde..."}
      {api ? <CardPokemonCalc dados={pokemon} /> : "Aguarde..."}
    </Container>
  );
}
