import { headers, cookies } from "next/headers"
import { NextRequest } from "next/server"

export async function GET(req: NextRequest) {

  const reqHeaders = new Headers(req.headers)
  const headerList = headers()

  ;(await cookies()).set("token", "123abc")
  const theme = req.cookies.get("theme")

  console.log(reqHeaders.get("Authorization"))
  console.log((await headerList).get("Authorization"))

  console.log(theme)
  console.log((await cookies()).get("token"))

  return new Response("<h1>Profile Route</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark"
    }
  })
}