import styles from "./Hero.module.scss";
import { FaFacebook, FaTwitter, FaPinterest, FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Hero = () => {
  const location = useLocation();

  const pathName = location.pathname;

  const absolutePathName = pathName.replace("/", "");

  const capFirstLetter = absolutePathName.slice(0, 1).toUpperCase();
  const remainingLetters =
    absolutePathName.slice(1, absolutePathName.length - 1) + "s";

  const joinedLetters = capFirstLetter + remainingLetters;

  return (
    <div className={`sw ${styles.wrapper}`}>
      <h2>
        Beautiful CSS {pathName === "/" ? "Box-Shadow" : joinedLetters} examples
      </h2>
      <span className={styles.hero_text}>
        Welcome to CSS Utility, the ultimate CSS utility that empowers
        designers, developers, and enthusiasts to streamline their web styling
        process like never before. Whether you're a seasoned pro or just diving
        into the world of web design, our app is your go-to companion for
        optimizing your CSS workflow and elevating your projects to new heights.
        <span>📌 Press ⌘+D to bookmark this page</span>
      </span>
      <div aria-roledescription="button" className={styles.buttons}>
        <Link
          to="https://www.facebook.com/share.php?u=https://css-utility.onrender.com"
          target="_blank"
          className={` ${styles.facebook} btn`}
        >
          <FaFacebook /> Share
        </Link>
        <Link
          to="http://www.twitter.com/share?url=https://css-utility.onrender.com"
          target="_blank"
          aria-roledescription="button"
          className={` ${styles.twitter} btn`}
        >
          <FaTwitter /> Tweet
        </Link>
        <Link
          to={`http://pinterest.com/pin/create/button/?url=https://css-utility.onrender.com`}
          target="_blank"
          aria-roledescription="button"
          className={` ${styles.pinterest} btn`}
        >
          <FaPinterest /> Pin
        </Link>
        <div className={styles.share}>
          <FaShare />
          Share
        </div>
      </div>
    </div>
  );
};

export default Hero;
