import { Phone, Instagram, Send, User } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              <span className="text-white-300">NextGenEdu</span>.uz
            </h2>
            <p className="mt-4 text-blue-100 text-sm leading-relaxed">
              Milliy sertifikat imtihoniga tayyorgarlik platformasi
            </p>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ijtimoiy tarmoqlar</h3>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-center gap-3 hover:text-white transition">
                <Instagram size={18} />
                <span>@NextGenEdu.uz</span>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition">
                <Send size={18} />
                <span>@NextGenEdu.uz</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Aloqa</h3>
            <div className="flex items-center gap-3 text-blue-100 hover:text-white transition">
              <Phone size={18} />
              <span>+998 99 999 99 99</span>
            </div>
          </div>

          {/* Founder */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Asoschisi</h3>
            <div className="flex items-center gap-3 text-blue-100">
              <User size={18} />
              <span>kimdir</span>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-blue-500 mt-10 pt-6 text-center text-sm text-blue-200">
          © 2026 NextGenEdu.uz  Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
}