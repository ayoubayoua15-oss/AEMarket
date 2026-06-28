export default function Categories() {
  const categories = [
    "📚 الكتب الإلكترونية",
    "🎓 الدورات التعليمية",
    "🎨 قوالب التصميم",
    "🤖 برومبتات الذكاء الاصطناعي",
    "📊 ملفات Excel",
    "📝 قوالب Notion",
    "💻 البرمجة والتطوير",
    "📸 الصور والوسائط",
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          تصفح حسب التصنيف
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition cursor-pointer text-center"
            >
              <h3 className="font-bold text-lg">
                {category}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
              }
