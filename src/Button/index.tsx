import styles from "./index.module.css";

export default function Button({ label, url }: { label: string; url?: string }) {
  return (
    <button className={styles.button} onClick={() => window.open(url, "_blank")}>
      {label}
    </button>
  );
}
