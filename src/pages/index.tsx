import Card from "@/components/Card";
import styles from "@/styles/Home.module.css";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";

interface Pokemon {
  id: number;
  name: string;
  url: string;
}

interface PokemonsDataProps {
  results: Pokemon[];
}

export const getStaticProps: GetStaticProps<{
  pokemons: any;
}> = async (context) => {
  const maxPokemons = 251;
  const api = `https://pokeapi.co/api/v2/pokemon`;
  const response = await fetch(`${api}?limit=${maxPokemons}`);
  const data: PokemonsDataProps = await response.json();

  // add pokemon index
  data.results.forEach((item: any, index: number) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
};

export default function Home({
  pokemons,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          alt="PokeNext logo"
          width="50"
          height="50"
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons?.map((pokemon: Pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
