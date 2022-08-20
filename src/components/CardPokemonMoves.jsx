import { CardContainer } from "../ui/CardContainer";

export const CardPokemonMoves = (props) => {
  let pokeMoves = props.dados.moves;
  console.log(pokeMoves);
  return (
    <CardContainer>
      <p>Moves</p>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          height: "300px",
          width: "80%",
        }}
      >
        {pokeMoves.map((moves) => (
          <li
            key={moves.move.name}
            style={{
              display: "flex",
              flexWrap: "wrap",
              listStyle: "none",
              fontSize: "12px",
            }}
          >
            {moves.move.name}
          </li>
        ))}
      </ul>
    </CardContainer>
  );
};
