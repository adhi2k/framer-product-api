import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const products = [
  {
    name: "Adhithya",
    slug: "adhi-twestern-arkansas-button-up-dark-hash-floral",
    description: "adhi Experience a unique Western style...",
    price: 108,
    compareAtPrice: 0,
    category: "Home page",
    tags: ["Aglini", "Cotton", "Western", "SALE"],
    productType: "Women's button-ups"
  },
  {
    name: "Young Man in Vibrant Jacket",
    slug: "western-arkansas-button-up-blue-floral",
    description: "A Western style shirt gets a sweet touch...",
    price: 108,
    compareAtPrice: 147,
    category: "Winter",
    tags: ["Aglini", "Cotton", "Western", "SALE"],
    productType: "Men's button-ups"
  }
];

serve((_req) =>
  new Response(JSON.stringify(products), {
    headers: { "Content-Type": "application/json" }
  })
);
