import styled from "styled-components";

const S_img = styled.img`
  width: 150px;
  height: auto;
`;
const S_p = styled.p`
  line-height: 30px;

  &:nth-child(1) {
    font-size: 2rem;
    margin: 20px 0;
  }
  &::first-letter {
    text-transform: uppercase;
  }
`;

export default function CardPokemon(props) {
  let tipoUm = props.dados.types[0].type.name;
  let tipoDois;

  if (props.dados.types[1]) {
    tipoDois = props.dados.types[1].type.name;
  } else {
    tipoDois = "";
  }

  return (
    <>
      <S_p>{props.dados.name}</S_p>
      <S_p>N° {props.dados.id}</S_p>
      <S_p>Tipo(s): {tipoDois ? tipoUm + " / " + tipoDois : tipoUm}</S_p>
      <S_p>
        {props.dados.stats[0].stat.name}: {props.dados.stats[0].base_stat}
      </S_p>
      <S_p>
        {props.dados.stats[1].stat.name}: {props.dados.stats[1].base_stat}
      </S_p>
      <S_p>
        {props.dados.stats[2].stat.name}: {props.dados.stats[2].base_stat}
      </S_p>
      <S_p>
        {props.dados.stats[3].stat.name}: {props.dados.stats[3].base_stat}
      </S_p>
      <S_p>
        {props.dados.stats[4].stat.name}: {props.dados.stats[4].base_stat}
      </S_p>
      <S_p>
        {props.dados.stats[5].stat.name}: {props.dados.stats[5].base_stat}
      </S_p>
      <S_img src={props.dados.sprites.front_default} alt="Foto do Pokemon" />
    </>
  );
}
