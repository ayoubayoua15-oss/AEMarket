import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          المنتجات المميزة
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <ProductCard
            title="دورة احترافية في التصميم"
            price={39}
            image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            category="دورات"
          />

          <ProductCard
            title="كتاب التسويق الرقمي"
            price={19}
            image="https://images.unsplash.com/photo-1516979187457-637abb4f9353"
            category="كتب"
          />

        </div>

      </div>
    </section>
  );
}
