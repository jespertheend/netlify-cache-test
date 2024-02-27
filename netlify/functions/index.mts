import type { Config, HandlerEvent } from "@netlify/functions";

export const config: Config = {
  method: "GET",
  path: ["/"],
};

export default async function handler(e: HandlerEvent) {
  return new Response("hello this is a function")
}
