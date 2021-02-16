import styles from "./Text.module.css";

export const Text: React.FC = ({children}) => {
  return <p className={styles.text_red}>{children}</p>
}
