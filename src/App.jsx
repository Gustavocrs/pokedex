import { useEffect, useState } from "react";
import { SInput } from "./ui/Sinput";
import { CardPokemonBase } from "./components/CardPokemonBase";
import { CardPokemonCalc } from "./components/CardPokemonCalc";
import { CardPokemonFoto } from "./components/CardPokemonFoto";
import { Container } from "./ui/Container";
import axios from "axios";
import { GlobalStyle } from "./components/GlobalStyle";

export default function App() {
  const [api, setApi] = useState(false);
  const [pokemon, setPokemon] = useState();
  const [input, setInput] = useState();

  // useEffect((e) => {
  //   if (pokemon) {
  //     if (e.key === "Enter") { //Analisar esta validação.
  //       if (input === "") {
  //         setApi(false);
  //       }
  //       getApi();
  //     }
  //   }
  // },[]);

  const getApi = async () => {
    let url = `https://pokeapi.co/api/v2/pokemon/${input}`;

    await axios
      .get(url)
      .then((res) => {
        setApi(true);
        setPokemon(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <GlobalStyle />
      <SInput
        type="text"
        placeholder="Digite um pokemon"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={getApi}
      />
      {api ? (
        <>
          <CardPokemonBase dados={pokemon} />
          <CardPokemonFoto dados={pokemon} />
          <CardPokemonCalc dados={pokemon} /> :
        </>
      ) : (
        <span>
          Digite o nome de um pokemon e pressione <strong>Enter</strong>...
        </span>
      )}
    </Container>
  );
}
