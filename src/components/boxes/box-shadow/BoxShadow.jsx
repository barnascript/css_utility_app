import styles from "./BoxShadow.module.scss";
import boxShadowData from "../boxShadowData";
import { useState } from "react";

const BoxShadow = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [boxes, setBoxes] = useState(
    boxShadowData.map((boxShadow) => ({ ...boxShadow, isCopied: false }))
  );
  const copyBoxShadow = (id) => {
    setBoxes((prevBoxes) =>
      prevBoxes.map((box) => (box.id === id ? { ...box, isCopied: true } : box))
    );

    navigator.clipboard.writeText(
      boxShadowData.find((box) => box.id === id)?.shadow
    );

    setTimeout(() => {
      setBoxes((prevBoxes) =>
        prevBoxes.map((box) =>
          box.id === id ? { ...box, isCopied: false } : box
        )
      );
    }, 2000);
  };

  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.boxes}>
        {boxes.map((box) => (
          <div
            className={styles.box0}
            style={{ boxShadow: box.shadow }}
            key={box.id}
            onClick={() => copyBoxShadow(box.id)}
          >
            {box.isCopied ? "Copied!!" : box.number}
            <span className={styles.tooltip}>
              Click to copy box - shadow {box.number}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxShadow;
