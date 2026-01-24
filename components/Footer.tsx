export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Berkay Kösen</h3>
            <p className="text-sm leading-relaxed">
              Plastik cerrahlar ve estetik klinikler için modern, 
              mobil uyumlu ve KVKK uyumlu web siteleri geliştiriyorum.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hızlı Erişim</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#demo" className="hover:text-accent transition-colors">
                  Örnek Çalışma
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-accent transition-colors">
                  Fiyatlandırma
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Yasal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Kullanım Şartları
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  KVKK Metni
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>
          &copy; {new Date().getFullYear()} Berkay Kösen. Tüm hakları saklıdır.
        </p>
        <p className="mt-2 text-xs text-gray-500">
          İstanbul, Türkiye | Genç Girişimci
        </p>
        </div>
      </div>
    </footer>
  );
}
