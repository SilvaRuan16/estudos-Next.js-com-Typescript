import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Olá Next</h1>
      <Link href={"/products"}>Ir para página de produtos</Link>
    </div>
  );
}
