import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Nav({ onPress = () => {} }) {
  const router = useRouter();
  const [active, setActive] = React.useState("");

  React.useEffect(() => {
    if (["/", "/creators", "/consumer"].includes(router.pathname)) {
      setActive(router.pathname);
    }
  }, [router.pathname]);

  return (
    <nav className={styles.nav}>
      <div className={styles.navleft}>
        <img className={styles.logo} src="logo.png" alt="logo" />

        <div className={styles.navlinks}>
          <Link href="/">
            <a
              style={{
                textDecoration: active === "/" ? "underline" : "none",
                textDecorationColor: "white",
              }}
              href="#"
            >
              Home
            </a>
          </Link>
          <Link href="/developers">
            <a
              style={{
                textDecoration: active === "/developers" ? "underline" : "none",
                textDecorationColor: "white",
              }}
              href="#"
            >
              Developers & Publishers
            </a>
          </Link>
          <Link href="/consumer">
            <a
              style={{
                textDecoration: active === "/consumer" ? "underline" : "none",
                textDecorationColor: "white",
              }}
              href="#"
            >
              Consumer
            </a>
          </Link>
          <Link href="/creators">
            <a
              style={{
                textDecoration: active === "/creators" ? "underline" : "none",
                textDecorationColor: "white",
              }}
              href="#"
            >
              Creators & Influencers
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.navright}>
        <div onClick={onPress} className={styles.navbtn}>
          Sign Up
        </div>
      </div>
    </nav>
  );
}
