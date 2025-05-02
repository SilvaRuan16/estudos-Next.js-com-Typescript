import React from "react";

export default function ProductDetailsLayout({ children }: {children: React.ReactNode}) {
  return (
    <>
      <p className="bg-blue-500">Especificações</p>
      {children}
    </>
  )
}