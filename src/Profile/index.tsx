import Button from "../Button";
import styles from "./index.module.css";

export default function Profile(
  {
    avatar,
    name,
    bio,
    email,
    phone,
    githubUrl,
    linkedinUrl,
  }: {
    avatar: string;
    name: string;
    bio: string;
    email: string;
    phone: string;
    githubUrl: string;
    linkedinUrl: string;
  }
) {
  return (
    <div className={styles.profile}>
      <img src={avatar} alt={name} />
      <h1>{name}</h1>
      <div className={styles.divider}></div>
      <p>{bio}</p>
      <div className={styles.divider}></div>
      <p>{phone}</p>
      <div className={styles.divider}></div>
      <p>{email}</p>
      <div className={styles.divider}></div>
      <Button label={"GitHub"} url={githubUrl} />
      <Button label={"LinkedIn"} url={linkedinUrl} />
    </div>
  );
}