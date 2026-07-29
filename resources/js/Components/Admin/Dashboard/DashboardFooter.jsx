export default function DashboardFooter() {
    return (
        <footer className="mt-12 border-t border-slate-200 py-8">

            <div className="flex flex-col items-center justify-between gap-2 text-center text-sm text-slate-500 md:flex-row">

                <p>
                    © {new Date().getFullYear()} ThaMad Splash CMS
                </p>

                <p>
                    Laravel • React • Inertia.js
                </p>

            </div>

        </footer>
    );
}