import styles from "./index.module.css";
import Button from "../Button/index";

export default () => (
  <div className={styles.card}>
    <div>
      <img
        className={styles.cardImage}
        src="https://i.pinimg.com/originals/ba/94/64/ba9464145eba8762f6286a3c8387c951.jpg"
        alt="Poster do Star Wars de 1977"
      />
    </div>
    <div className={styles.cardContent}>
      <h2 className={styles.cardTitle}>Pôster: Star Wars (1977)</h2>
      <p className={styles.cardDescription}>
        O pôster original de Star Wars, filme em 1977, é uma obra de arte de Tom
        Jung. A imagem apresenta o personagem de Darth Vader, o vilão mais
        icônico da saga, em primeiro plano, contra um fundo preto com as
        estrelas da galáxia. A cor preta dominante do pôster, ajudou a criar um
        clima sombrio e aterrorizante, que se tornou um símbolo do filme.
      </p>
      <Button />
    </div>
  </div>
);
