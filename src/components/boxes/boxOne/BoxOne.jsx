import styles from "./BoxOne.module.scss";
import data from "../data";
import { useState } from "react";

const BoxOne = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [boxes, setBoxes] = useState(data);

  //   const copyShadow = (id) => {
  //     const clickedBoxShadow = data.filter((box) => box.id === id);
  //     const shadow = clickedBoxShadow.map((box) => box.shadow);
  //     console.log(shadow);
  //     navigator.clipboard.writeText(shadow);
  //     setIsCopied(true);
  //   };

  const copyShadow = (id) => {
    const updatedBoxes = boxes.map((box) => {
      if (box.id === id) {
        const shadow = box.shadow;
        navigator.clipboard.writeText(shadow);
        return { ...box };
      }
      return box;
    });
    setIsCopied(true);
    setBoxes(updatedBoxes);
  };

  setTimeout(() => {
    setIsCopied(false);
  }, 2000);
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.boxes}>
        {boxes.map((box) => (
          <div
            className={styles.box0}
            style={{ boxShadow: box.shadow }}
            key={box.id}
            onClick={() => copyShadow(box.id)}
          >
            {isCopied ? "Copied!!" : box.number}
            <span className={styles.tooltip}>
              Click to copy box - shadow {box.number}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxOne;
