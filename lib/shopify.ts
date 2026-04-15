const STORE_DOMAIN = "pharmabest-supplies.myshopify.com";

export type ShopifyVariant = {
  id: number;
  price: string;
  compare_at_price: string | null;
  available: boolean;
};

export type ShopifyImage = {
  src: string;
  width: number;
  height: number;
};

export type ShopifyProduct = {
  id: number;
  title: string;
  handle: string;
  body_html: string;
  vendor: string;
  tags: string[];
  variants: ShopifyVariant[];
  images: ShopifyImage[];
};

export async function fetchShopifyProducts(): Promise<ShopifyProduct[]> {
  const res = await fetch(`https://${STORE_DOMAIN}/products.json?limit=250`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error(`Shopify fetch failed: ${res.status}`);
  const data = (await res.json()) as { products: ShopifyProduct[] };
  return data.products;
}

export function productUrl(handle: string) {
  return `https://${STORE_DOMAIN}/products/${handle}`;
}

export function formatPrice(price: string) {
  const n = Number.parseFloat(price);
  if (Number.isNaN(n)) return `$${price}`;
  return `$${n.toFixed(2)}`;
}
