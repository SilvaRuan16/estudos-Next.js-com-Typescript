interface ReviewsParams {
  params: {
    productId: number
    reviewId: number
  }
}

export default function Review({params}: ReviewsParams) {
  return (
    <div>
      <p>Produto {params.productId}</p>
      <p>Review {params.reviewId}</p>
    </div>
  )
}