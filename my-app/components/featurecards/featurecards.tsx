import { BookOpen, Award, Clock, Trophy } from "lucide-react";

export default function Features() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mock Testlar
          </h2>
          <p className="text-gray-600">
            Milliy sertifikat imtihoniga to'liq tayyorgarlik
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 mb-6">
              <BookOpen className="text-blue-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              45 ta savol
            </h3>
            <p className="text-gray-600">
              Milliy sertifikat formatidagi to'liq mock testlar
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 mb-6">
              <Award className="text-blue-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Rasch baholash
            </h3>
            <p className="text-gray-600">
              Ilmiy asoslangan 10-90 ball tizimi
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 mb-6">
              <Clock className="text-blue-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Real vaqt
            </h3>
            <p className="text-gray-600">
              2:30 soatlik haqiqiy imtihon sharoiti
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 mb-6">
              <Trophy className="text-blue-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Reyting
            </h3>
            <p className="text-gray-600">
              Eng yaxshi natijalar reytingi va taqqoslash
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}