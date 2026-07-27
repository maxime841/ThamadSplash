import Navbar from "../Components/Site/Layout/Navbar";
import Footer from "../Components/Site/Layout/Footer";

export default function SiteLayout({ children }) {
    return (
        <div className="min-h-screen bg-white flex flex-col">

            <Navbar />

            <main className="flex-1">
                {children}
            </main>

            <Footer />

        </div>
    );
}