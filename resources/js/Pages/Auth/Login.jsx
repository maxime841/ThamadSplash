import { useForm } from '@inertiajs/react';

export default function Login() {

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    function submit(e) {
        e.preventDefault();
        post('/login');
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700">

            <form
                onSubmit={submit}
                className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md"
            >

                <h1 className="text-4xl font-bold text-center text-cyan-700 mb-8">
                    Administration
                </h1>

                <input
                    type="email"
                    placeholder="Adresse e-mail"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    className="w-full border rounded-xl p-3 mb-2"
                />

                {errors.email && (
                    <p className="text-red-500 text-sm mb-4">
                        {errors.email}
                    </p>
                )}

                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    className="w-full border rounded-xl p-3 mb-6"
                />

                <button
                    disabled={processing}
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-semibold transition"
                >
                    Se connecter
                </button>

            </form>

        </div>
    );
}