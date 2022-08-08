import { useEffect, useState } from "react";
import CardPokemon from "./components/CardPokemon";
import { Container } from "./components/Container";
import axios from "axios";
import { GlobalStyle } from "./components/GlobalStyle";

export default function App() {
  const [api, setApi] = useState(false);
  const [pokemon, setPokemon] = useState("");

  useEffect(() => {
    getApi("darkrai");
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
      {api ? <CardPokemon dados={pokemon} /> : "Aguarde..."}
    </Container>
  );
}
