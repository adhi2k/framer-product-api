import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const products = [
  {
    name: "Adhithya",
    price: 1028,
    stock: 100
  },
  {
    name: "Young Man",
    price: 1202,
    stock: 52
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
