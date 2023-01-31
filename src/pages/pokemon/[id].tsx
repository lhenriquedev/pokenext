import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import React from "react";

import styles from "@/styles/Pokemon.module.css";

interface PokemonTypes {
  type: {
    name: string;
  };
}

interface PokemonProps {
  name: string;
  id: number;
  height: number;
  weight: number;
  types: PokemonTypes[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const maxPokemons = 251;
  const api = `https://pokeapi.co/api/v2/pokemon`;
  const response = await fetch(`${api}?limit=${maxPokemons}`);
  const data = await response.json();

  // params
  const paths = data.results.map((pokemon: PokemonProps, index: number) => {
    return {
      params: { id: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();

  return {
    props: {
      pokemon: data,
    },
  };
};

export default function PokemonId({ pokemon }: { pokemon: PokemonProps }) {
  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{pokemon.name}</h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt="pokemon"
        width="200"
        height="200"
      />
      <div>
        <h3>Numero</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo:</h3>
        <div className={styles.types_container}>
          {pokemon?.types.map((item: PokemonTypes, index: number) => (
            <span
              key={index}
              className={`${styles.type} ${styles["type_" + item.type.name]}`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10}cm</p>
        </div>
        <div className={styles.data_weight}>
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10}kg</p>
        </div>
      </div>
    </div>
  );
}
