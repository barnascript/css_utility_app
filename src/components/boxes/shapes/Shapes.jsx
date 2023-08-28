import styles from "./Shapes.module.scss";
import shapesData from "../shapesData";
import { useState, useRef } from "react";

const Shapes = ({ className }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [data, setData] = useState(
    shapesData.map((shape) => ({ ...shape, isCopied: false }))
  );
  const copyShape = (id) => {
    setData((prevShape) =>
      prevShape.map((shape) =>
        shape.id === id ? { ...shape, isCopied: !shape.isCopied } : shape
      )
    );
    navigator.clipboard.writeText(
      data.find((shape) =>
        shape.id === id ? JSON.stringify(shape.style) : shape
      )
    );

    setTimeout(() => {
      setData((prevShape) =>
        prevShape.map((shape) =>
          shape.id === id ? { ...shape, isCopied: false } : shape
        )
      );
    }, 2000);
  };

  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.shapes}>
        {data.map((shape, index) => {
          const { name, style, id } = shape;
          return (
            <div
              className={styles.shape_container}
              key={id}
              onClick={() => copyShape(id)}
            >
              <div className={styles.shape} style={style}></div>
              <span className={styles.tooltip}>Click to copy {name}</span>
              <span className={styles.name}>
                {shape.isCopied ? "copied!!" : name}
              </span>
            </div>
          );
        })}
        {/* <div className={styles.shape_container_two}>
          <div className={styles.bubble_top}></div>
          <span className={styles.tooltip}>Click to copy</span>
          <span className={styles.name}>Bubble Top</span>
        </div> */}
      </div>
    </div>
  );
};

export default Shapes;
