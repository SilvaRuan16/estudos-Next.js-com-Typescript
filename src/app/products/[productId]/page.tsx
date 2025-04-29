interface InfoParams {
  params: {
    productId: number
  }
}

export default function Info({ params }: InfoParams) {
  return (
    <div>
      <p>Aqui fala sobre o produto {params.productId}</p>
    </div>
  )
}