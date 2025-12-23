import styles from "./index.module.css";
import Button from "../Button/index";

/**
 * Componente de card que exibe informações sobre um filme/série.
 * 
 * @param movie - Objeto contendo id, título, descrição e imagem do filme/série.
 * @param buttonLabel - O texto que será exibido no botão dentro do card.
 * @returns O componente de card renderizado.
 */
export default (
  { movie: { id, title, description, image }, buttonLabel }:
    { movie: { id: number; title: string; description: string; image: string }; buttonLabel: string }
) => (
  <div className={styles.card} key={id}>
    <div>
      <img
        className={styles.cardImage}
        src={image}
        alt={title}
      />
    </div>
    <div className={styles.cardContent}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardDescription}>
        {description}
      </p>
      <Button label={buttonLabel} />
    </div>
  </div>
);
