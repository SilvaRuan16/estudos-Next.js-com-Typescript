import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Produtos"
  }
}

export default function Products() {
  return (
    <div>
      <p>Produto 1</p>
      <p>Produto 2</p>
      <p>Produto 3</p>
    </div>
  )
}