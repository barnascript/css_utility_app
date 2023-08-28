import styles from "./Hero.module.scss";
import { FaFacebook, FaTwitter, FaPinterest, FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <h2>Beautiful CSS box-shadow examples</h2>
      <span className={styles.hero_text}>
        All of these box-shadows were copied using CSS Scan logo CSS Scan (click
        here to try a free demo). With CSS Scan you can easily inspect or copy
        any website's CSS. <span>📌 Press ⌘+D to bookmark this page</span>
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
