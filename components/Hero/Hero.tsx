import Link from 'next/link';

export default function Hero() {
  return (
    <section>
      <h1>Campers of your dreams</h1>
      <p>You can find everything you want in our catalog</p>
      <Link href="/campers">View Now</Link>
    </section>
  );
}