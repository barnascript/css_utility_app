import styles from "./Header.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";

const Home = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className={`fw ${styles.wrapper}`}>
      <div className={`sw ${styles.container}`}>
        <h1>
          <div className={styles.red}>🔴</div>
          <span>CSS Utility App</span>
        </h1>
        <button>Get More Apps</button>
        {!menu && (
          <RxHamburgerMenu
            className={styles.open_menu}
            onClick={() => setMenu(!menu)}
          />
        )}
        {menu && (
          <div className={styles.dropdown}>
            <LiaTimesSolid
              className={styles.close_menu}
              onClick={() => setMenu(!menu)}
            />
            <ul>
              <li>Lio</li>
              <li>Lio</li>
              <li>Lio</li>
              <li>Lio</li>
              <li>Lio</li>
              <li>Lio</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Home;
