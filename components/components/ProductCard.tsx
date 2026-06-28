interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  category?: string;
}

export default function ProductCard({
  title,
  price,
  image,
  category,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300">

      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover"
        />

        {category && (
          <span className="absolute top-4 right-4 bg-[#D4AF37] text-black px-3 py-1 rounded-full text-xs font-bold">
            {category}
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold">
          {title}
        </h3>

        <p className="text-[#D4AF37] text-2xl font-bold mt-3">
          ${price}
        </p>

        <button className="btn-gold w-full mt-5">
          شراء الآن
        </button>
      </div>
    </div>
  );
      }
