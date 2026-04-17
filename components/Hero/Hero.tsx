import Link from "next/link";
import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <div className={css.content}>
          <h1>Campers of your dreams</h1>
          <p>You can find everything you want in our catalog</p>
        </div>
        <Link className={css.mainBut} href="/campers">
          View Now
        </Link>
      </div>
    </section>
  );
}
