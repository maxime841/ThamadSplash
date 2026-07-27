import Navbar from '../Components/Site/Layout/Navbar';
export default function Ecole() {
    return (
        <body>
            <header>
                <Navbar />
            </header>
            <main className= "max-width-7xl mx-auto bg-slate-950 min-h-screen">
            <h1 className="text-6xl md:text-8xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-700 bg-clip-text text-transparent 
            drop-shadow tracking-wide ">Ecole Thaly Daycare </h1>
            </main>
        </body>
        
    );
}