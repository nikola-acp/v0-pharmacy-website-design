import Image from "next/image";
import { Star, ShoppingCart, Plus } from "lucide-react";

type Product = {
  badge: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  reviews: string;
  price: string;
  oldPrice?: string;
  stat: string;
  quantity: string;
};

const products: Product[] = [
  {
    badge: "Labels",
    title: "Plain Thermal Labels",
    description: "High-adhesion durable label rolls for prescription bottles and general pharmacy use.",
    image: "/product-plain-thermal-labels.jpg",
    rating: 5,
    reviews: "1,240+",
    price: "$49.99",
    stat: "20% more labels",
    quantity: "12,000 / box",
  },
  {
    badge: "Custom",
    title: "Custom Thermal Labels",
    description: "Branded labels with your pharmacy's logo, name, and contact information.",
    image: "/product-custom-thermal-labels.jpg",
    rating: 5,
    reviews: "560+",
    price: "$69.99",
    stat: "20% more labels",
    quantity: "12,000 / box",
  },
  {
    badge: "Receipts",
    title: "Plain Thermal Receipts",
    description: "Crystal-clear thermal receipt rolls for long-lasting transaction records.",
    image: "/product-plain-thermal-receipts.jpg",
    rating: 5,
    reviews: "980+",
    price: "$39.99",
    oldPrice: "$44.99",
    stat: "20% more for 10% less",
    quantity: "24,000 / box",
  },
  {
    badge: "Custom",
    title: "Custom Thermal Receipts",
    description: "Branded receipt rolls featuring your pharmacy logo on every transaction.",
    image: "/product-custom-thermal-receipts.jpg",
    rating: 5,
    reviews: "420+",
    price: "$59.99",
    stat: "20% more for 10% less",
    quantity: "24,000 / box",
  },
  {
    badge: "Hardware",
    title: "Thermal Printers",
    description: "Fast, reliable thermal printers built for high-volume pharmacy environments.",
    image: "/product-thermal-printer.jpg",
    rating: 5,
    reviews: "310+",
    price: "Free",
    stat: "Free with initial purchase",
    quantity: "Per location",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < count ? "fill-current" : "text-slate-200"}`}
        />
      ))}
    </div>
  );
}

export default function FeaturedProducts() {
  return (
    <section id="products" className="bg-slate-50 py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="section-label mb-4">Essential Supplies</div>
            <h2 className="mb-4 text-slate-900">Premium quality for every pharmacy</h2>
            <p className="text-slate-600 text-lg">
              We provide the most trusted thermal labels and receipt rolls for IDA, Guardian, 
              and Pharmasave locations across Ontario.
            </p>
          </div>
          <div className="hidden md:block">
            <a href="#custom" className="btn-outline">
              Custom Orders
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <article
              key={product.title}
              className="card-modern group p-4 flex flex-col"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100 mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 33vw, 50vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm shadow-sm text-[10px] font-bold text-slate-900 uppercase tracking-wider">
                    {product.badge}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <Stars count={product.rating} />
                <span className="text-[11px] text-slate-500 font-bold">
                  {product.reviews}
                </span>
              </div>

              <h3 className="text-base font-extrabold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                {product.title}
              </h3>
              <p className="text-[13px] text-slate-500 leading-relaxed mb-4 line-clamp-2">
                {product.description}
              </p>

              <div className="mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-black text-slate-900">
                        {product.price}
                      </span>
                      {product.oldPrice && (
                        <span className="text-xs text-red-500 line-through font-bold">
                          {product.oldPrice}
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] text-blue-600 font-black uppercase tracking-tight">
                      {product.stat}
                    </div>
                  </div>
                </div>

                <a
                  href="https://pharmabest-supplies.myshopify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary !py-2.5 !text-[13px] group/btn"
                >
                  Order Now
                  <ShoppingCart className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                </a>
                <div className="text-[10px] text-center text-blue-600 mt-2 font-bold">
                  {product.quantity}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="md:hidden flex justify-center mt-12">
          <a href="#custom" className="btn-outline w-full">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
