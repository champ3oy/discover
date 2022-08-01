import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navleft}>
        <img className={styles.logo} src="logo.png" alt="logo" />

        <div className={styles.navlinks}>
          <Link href="/">
            <a href="#">Developers & Publishers</a>
          </Link>
          <Link href="/consumer">
            <a href="#">Consumer</a>
          </Link>
          <Link href="/creators">
            <a href="#">Creators & Influencers</a>
          </Link>
        </div>
      </div>
      <div className={styles.navright}>
        <div className={styles.navbtn}>Sign Up</div>
      </div>
    </nav>
  );
}
