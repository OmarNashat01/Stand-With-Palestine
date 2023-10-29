import Hero from "./components/hero/hero";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero
        title={"How long will the lies and aggression continue?"}
        imgPath={"/images/hero.png"}
      />
    </main>
  );
}
