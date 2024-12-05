export default function Header() {
    return (
        <>
            <header className="flex flex-row justify-center gap-4 items-center bg-blue-600 text-white py-4">
                <a href="#movies" className="hover:underline cursor-pointer">Movies</a>
                <a href="#genres" className="hover:underline cursor-pointer">Genres</a>
            </header>
            <section className="desc text-center bg-blue-100 py-8">
                <h3 className="text-2xl font-bold text-blue-800">Welcome!</h3>
                <h4 className="text-lg text-blue-700">Discover lots of movies. Search now</h4>
                <div className="mt-4">
                    <input 
                        type="text" 
                        placeholder="Search for movies..." 
                        className="px-4 py-2 border border-blue-300 rounded-md"
                    />
                    <button 
                        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Search
                    </button>
                </div>
            </section>
        </>
    );
}