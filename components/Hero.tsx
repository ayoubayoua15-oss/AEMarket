export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* النص */}
        <div>
          <span className="text-[#D4AF37] font-bold text-lg">
            منصة المنتجات الرقمية الاحترافية
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6 leading-tight">
            اكتشف
            <span className="text-[#D4AF37]">
              {" "}أفضل المنتجات الرقمية{" "}
            </span>
            وابدأ مشروعك اليوم
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            آلاف الكتب الإلكترونية والدورات والقوالب والملفات الجاهزة
            لمساعدتك على التعلم وبناء مشروعك الرقمي.
          </p>

          <div className="flex gap-4 mt-10">
            <button className="btn-gold">
              استكشف المنتجات
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              انضم كمبدع
            </button>
          </div>
        </div>

        {/* الصورة */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            alt="Digital Products"
            className="rounded-3xl shadow-2xl w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  );
          }
