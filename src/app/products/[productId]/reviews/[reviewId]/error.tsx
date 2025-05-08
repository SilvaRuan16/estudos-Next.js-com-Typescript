"use client"

export default function Error({error}: {error: Error}) {
  return (
    <div>Invalid {error.message} Id</div>
  )
}