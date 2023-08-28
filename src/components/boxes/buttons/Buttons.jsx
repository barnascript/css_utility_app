import styles from "./Buttons.module.scss";
import boxShadowData from "../boxShadowData";
import { useState, useRef } from "react";
import buttonData from "../buttonData";

const Buttons = ({ className }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [data, setData] = useState(buttonData);

  const ref = useRef();

  const copyStyles = (text) => {
    const button = ref.current;
    const styles = window.getComputedStyle(button);
    const bg = styles.getPropertyValue("background-color");
    console.log(bg);
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.buttons}>
        <button
          className={styles.button_1}
          onClick={() => copyStyles(styles.button_1)}
          ref={ref}
        >
          Button 1<span className={styles.tooltip}>Click to copy Button 1</span>
        </button>
      </div>
    </div>
  );
};

export default Buttons;
