import Navigation from "@/components/surgeon3/Navigation";
import Footer from "@/components/surgeon3/Footer";

export default function Surgeon3Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
            <Navigation />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}
