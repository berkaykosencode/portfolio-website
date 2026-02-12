export default function KvkkPage() {
    return (
        <div className="bg-gray-900 min-h-screen text-gray-300 py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">KVKK Aydınlatma Metni</h1>
                <div className="space-y-6 leading-relaxed">
                    <p>
                        6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca,
                        Berkay Kösen olarak veri sorumlusu sıfatıyla kişisel verilerinizi aşağıda açıklanan kapsamda işliyoruz.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Verilerin İşlenme Amacı</h2>
                    <p>
                        Kişisel verileriniz (Ad, Soyad, İletişim Bilgileri), size sunulan hizmetlerin ifası,
                        iletişim taleplerinizin yanıtlanması ve süreçlerin yönetilmesi amacıyla işlenmektedir.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Haklarınız</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                        <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
                        <li>Amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                        <li>Yanlış veya eksik işlenen verilerin düzeltilmesini isteme haklarına sahipsiniz.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Başvuru</h2>
                    <p>
                        KVKK kapsamındaki haklarınızı kullanmak için iletişim sayfasındaki kanallardan başvuruda bulunabilirsiniz.
                    </p>

                    <div className="mt-12 pt-8 border-t border-gray-800">
                        <p className="text-sm text-gray-500">Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
