import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import SideNav from "./SideNav";

export default function Nav({ onPress = () => {} }) {
  const router = useRouter();
  const [active, setActive] = React.useState("");
  const [open, setopen] = React.useState(false);

  const [width, setwidth] = React.useState("");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      let width_ =
        document.body.clientWidth ||
        window.innerHeight ||
        document.documentElement.clientHeigh;

      setwidth(width_);
    }
  }, []);

  React.useEffect(() => {
    if (
      ["/", "/creators", "/consumer", "/developers"].includes(router.pathname)
    ) {
      setActive(router.pathname);
    }
  }, [router.pathname]);

  return (
    <nav className={styles.nav}>
      <div className={styles.navleft}>
        <img className={styles.logo} src="logo.png" alt="logo" />
      </div>
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
            Consumer & Superfans
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
      <div className={styles.navright}>
        {width <= 600 ? (
          <img
            onClick={() => {
              setopen(true);
            }}
            className={styles.menu}
            src="bar.png"
            alt="menu"
          />
        ) : (
          <div onClick={onPress} className={styles.navbtn}>
            {["/", "/developers"].includes(router.pathname)
              ? "Sign Up"
              : "Get Early Access"}
          </div>
        )}
      </div>

      <SideNav
        open={open}
        onclose={() => {
          setopen(false);
        }}
      />
    </nav>
  );
}
