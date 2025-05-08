import { redirect } from "next/navigation";
import { data } from "../data";

export async function GET(req: Request, {params}: {params: {id: string}}) {

  if (parseInt(params.id) > data.length) {
    redirect("/names")
  }

  const name = data.find(name => name.id === parseInt(params.id))

  return Response.json(name)
}

export async function PATCH(req: Request, {params}: {params: {id: string}}) {
  const body = await req.json()
  const {text} = body
  const index = data.findIndex(user => user.id === parseInt(params.id))

  data[index].name = text
  return Response.json(data[index])
}

export async function DELETE(req: Request, {params}: {params: {id: string}}) {
  const index = data.findIndex(user => user.id === parseInt(params.id))

  const deleteUser = data[index]
  data.splice(index, 1)
  return Response.json(deleteUser)
}