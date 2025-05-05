import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const products = [
  {
    name: "Adhithya",
    price: 108,
    stock: 10
  },
  {
    name: "Young Man",
    price: 120,
    stock: 5
  }
];

serve((_req) =>
  new Response(JSON.stringify(products), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"  // <-- REQUIRED for Framer!
    }
  })
);
