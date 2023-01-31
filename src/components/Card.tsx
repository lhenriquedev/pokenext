import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Card.module.css";

interface PokemonProps {
  name: string;
  id: number;
}

export default function Card({ pokemon }: { pokemon: PokemonProps }) {
  return (
    <article className={styles.card}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt="pokemon"
        width="120"
        height="120"
      />
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link className={styles.btn} href={`/pokemon/${pokemon.id}`}>
        Ver detalhes
      </Link>
    </article>
  );
}
