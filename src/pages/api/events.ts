import type { APIRoute } from "astro"

export const prerender = false

export const POST: APIRoute = async ({ request }) => {
  const body = await request.text()
  const url = new URL(request.url)

  const clientIp =
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0] ||
    request.headers.get("cf-connecting-ip") ||
    ""

  const response = await fetch("https://datafa.st/api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": request.headers.get("User-Agent") || "",
      Origin: request.headers.get("Origin") || url.origin,
      "x-datafast-real-ip": clientIp,
    },
    body,
  })

  const responseText = await response.text()

  return new Response(responseText, {
    status: response.status,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
