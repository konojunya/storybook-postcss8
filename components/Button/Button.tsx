import styles from "./Button.module.css";
import {Text} from "../Text";

export const Button = () => {
  return <button className={styles.wrapper}><Text>red text</Text></button>
}
