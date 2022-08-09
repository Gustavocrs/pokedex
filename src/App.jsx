import { useState } from "react";
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
  const [input, setInput] = useState("");

  const getApi = async (event) => {
    if (event.key === "Enter" && input !== "") {
      let url = `https://pokeapi.co/api/v2/pokemon/${input}`;
      await axios
        .get(url)
        .then((res) => {
          setApi(true);
          setPokemon(res.data);
          // console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else if (input === "" && event.key === "Enter") {
      alert("Escolha um pokemon");
    }
  };

  return (
    <Container>
      <GlobalStyle />
      <SInput
        type="text"
        placeholder="Digite um pokemon ou id"
        value={input}
        onChange={(e) => setInput((e.target.value).toLocaleLowerCase())}
        onKeyDown={getApi}
      />
      {api ? (
        <>
          <CardPokemonBase dados={pokemon} />
          <CardPokemonFoto dados={pokemon} />
          <CardPokemonCalc dados={pokemon} /> :
        </>
      ) : (
        <p>
          Digite o nome ou id de um pokemon e pressione <strong>Enter</strong>
          ...
        </p>
      )}
    </Container>
  );
}
