import type { Config, HandlerEvent } from "@netlify/functions";

export const config: Config = {
  method: "GET",
  path: ["/wait"],
};

export default async function handler(e: Request) {
  const url = new URL(e.url);
  const t = parseInt(url.searchParams.get("t"));
  await new Promise<void>(r => {
    setTimeout(r, t);
  })
  return new Response("hello this is a function", {
    headers: {
      "Netlify-CDN-Cache-Control": "public, s-maxage=31536000, must-revalidate",
      "Cache-Control": "public, max-age=0, must-revalidate"
    }
  })
}
