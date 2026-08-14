export default function StatCard({ title, value, icon, color = "cyan" }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-l-cyan-500 hover:shadow-xl transition duration-300">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-gray-500 text-sm">{title}</p>
                    <h2 className="text-4xl font-bold mt-2">{value}</h2>
                </div>

                <div className="text-5xl">
                    {icon}
                </div>
            </div>
        </div>
    );
}
