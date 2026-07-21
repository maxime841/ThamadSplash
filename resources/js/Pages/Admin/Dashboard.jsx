export default function Dashboard() {
    return (
        <div className="min-h-screen bg-slate-100">
            <div className="max-w-7xl mx-auto p-10">

                <h1 className="text-5xl font-bold text-cyan-700 mb-8">
                    Tableau de bord
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h2 className="text-xl font-semibold">🎉 Soirées</h2>
                        <p className="text-4xl font-bold mt-4">0</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h2 className="text-xl font-semibold">🏠 Locations</h2>
                        <p className="text-4xl font-bold mt-4">0</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h2 className="text-xl font-semibold">🎢 Attractions</h2>
                        <p className="text-4xl font-bold mt-4">0</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h2 className="text-xl font-semibold">🎯 Activités</h2>
                        <p className="text-4xl font-bold mt-4">0</p>
                    </div>

                </div>

            </div>
        </div>
    );
}