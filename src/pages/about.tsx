import styles from "@/styles/About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, ad!</p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="charizard photo"
      />
    </div>
  );
}
