import { notFound } from "next/navigation"

interface ReviewsParams {
  params: {
    productId: number
    reviewId: string
  }
}

export default function Review({params}: ReviewsParams) {

  if (parseInt(params.reviewId) > 1000) notFound()
  

  return (
    <div>
      <p>Produto {params.productId}</p>
      <p>Review {params.reviewId}</p>
    </div>
  )
}