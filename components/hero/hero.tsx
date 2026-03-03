export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
            ⭐ O'zbekistondagi #1 Mock Test Platformasi
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
            Milliy Sertifikat{" "}
            <span className="text-blue-600">Mock Testlari</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg mb-8 max-w-xl">
            O'z bilimingizni sinab ko'ring va milliy sertifikat imtihoniga
            tayyorlaning. Zamonaviy baholash tizimi va real imtihon muhiti.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition shadow-md">
              Testni boshlash →
            </button>

            <button className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl font-medium transition">
              Kirish →
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <div className="relative bg-blue-600 rounded-3xl p-12 w-[300px] h-[300px] md:w-[380px] md:h-[380px] flex flex-col items-center justify-center shadow-xl">
            
            <div className="text-6xl mb-4 text-white">🎓</div>

            <div className="text-3xl md:text-4xl font-bold text-white text-center">
              NextGenEdu.uz
            </div>

            {/* soft blur background effect */}
            <div className="absolute -z-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
          </div>
        </div>

      </div>
    </section>
  );
}