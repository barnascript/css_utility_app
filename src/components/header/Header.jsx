import styles from "./Header.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className={`fw ${styles.wrapper}`}>
      <div className={`sw ${styles.container}`}>
        <h1>
          <div className={styles.red}>🔴</div>
          <span>CSS Utility App</span>
        </h1>
        <div className={styles.links}>
          <Link className={styles.box_shadows} to="/">
            box-shadows
          </Link>
          <Link className={styles.css_shapes} to="/shapes">
            css-shapes
          </Link>
          <Link className={styles.buttons}>
            <small>coming soon</small>
            buttons
          </Link>
          <Link className={styles.checkboxes}>
            <small>coming soon</small>checkboxes
          </Link>
        </div>

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
              <Link to="/" onClick={() => setMenu(false)}>
                <li>Box Shadows</li>
              </Link>
              <Link to="/shapes" onClick={() => setMenu(false)}>
                <li>Shapes</li>
              </Link>
              <li>Checkboxes</li>
              <li>Buttons</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Home;
