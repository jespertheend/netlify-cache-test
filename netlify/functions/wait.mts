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
      "Cache-Control": "max-age=18000"
    }
  })
}
