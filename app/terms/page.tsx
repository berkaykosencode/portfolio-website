export default function TermsPage() {
    return (
        <div className="bg-gray-900 min-h-screen text-gray-300 py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">Kullanım Şartları</h1>
                <div className="space-y-6 leading-relaxed">
                    <p>
                        Bu web sitesini (berkaykosen.com) ziyaret ederek aşağıdaki şartları kabul etmiş sayılırsınız.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Hizmet Tanımı</h2>
                    <p>
                        Berkay Kösen, estetik cerrahlar ve klinikler için web tasarım ve geliştirme hizmetleri sunmaktadır.
                        Sitede yer alan demo çalışmalar ve referanslar tanıtım amaçlıdır.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Fikri Mülkiyet</h2>
                    <p>
                        Bu web sitesindeki tüm tasarımlar, kodlar ve içerikler Berkay Kösen'e aittir.
                        İzin alınmadan kopyalanamaz veya ticari amaçla kullanılamaz.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Değişiklik Hakkı</h2>
                    <p>
                        Berkay Kösen, bu şartları dilediği zaman değiştirme hakkını saklı tutar.
                    </p>

                    <div className="mt-12 pt-8 border-t border-gray-800">
                        <p className="text-sm text-gray-500">Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
