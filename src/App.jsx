import { useState } from "react";
import axios from "axios";
import { CardPokemonBase } from "./components/CardPokemonBase";
import { CardPokemonFoto } from "./components/CardPokemonFoto";
import { SInput } from "./ui/Sinput";
import { Container } from "./ui/Container";
import { GlobalStyle } from "./ui/GlobalStyle";
import { Sp } from "./ui/Sp";

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
        .catch((err) => {
          if (err.response.data === "Not Found") {
            alert("Pokemon não encontrado");
          } else {
            console.log(err);
          }
        });
    } else if (input === "" && event.key === "Enter") {
      setApi(false);
    }
  };

  return (
    <Container>
      <GlobalStyle />
      <SInput
        type="text"
        placeholder="Digite um pokemon ou id"
        value={input}
        onChange={(e) => setInput(e.target.value.toLocaleLowerCase())}
        onKeyDown={getApi}
      />
      {api ? (
        <>
          <CardPokemonFoto dados={pokemon} />
          <CardPokemonBase dados={pokemon} />
        </>
      ) : (
        <Sp>
          Digite o nome ou id de um pokemon e pressione <strong>Enter</strong>
          ...
        </Sp>
      )}
    </Container>
  );
}
