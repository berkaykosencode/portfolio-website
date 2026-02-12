export default function PrivacyPage() {
    return (
        <div className="bg-gray-900 min-h-screen text-gray-300 py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">Gizlilik Politikası</h1>
                <div className="space-y-6 leading-relaxed">
                    <p>
                        Berkay Kösen olarak gizliliğinize önem veriyorum. Bu politika, kişisel verilerinizin nasıl işlendiğini açıklar.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Toplanan Veriler</h2>
                    <p>
                        Bu web sitesi üzerinden "İletişim Formu" aracılığıyla gönderdiğiniz Ad, E-posta ve Mesaj bilgilerini,
                        size dönüş yapabilmek amacıyla topluyorum.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Çerezler (Cookies)</h2>
                    <p>
                        Web sitesi performansını artırmak ve ziyaretçi istatistiklerini izlemek için çerezler kullanılabilir.
                        Tarayıcı ayarlarınızdan çerezleri yönetebilirsiniz.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Veri Paylaşımı</h2>
                    <p>
                        Kişisel verileriniz, yasal zorunluluklar haricinde üçüncü taraflarla asla paylaşılmaz.
                    </p>

                    <div className="mt-12 pt-8 border-t border-gray-800">
                        <p className="text-sm text-gray-500">Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
