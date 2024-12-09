
import Link from "next/link";

export default function Header() {
    return (
        <div>
            <h1 className="flex flex-row justify-center gap-4 items-center bg-blue-600 text-white py-4">
                <Link href={"/"}>
                <p className="hover:underline cursor-pointer">Home</p>
                </Link>
                <Link href="./pages/trending">
                    <p className="hover:underline cursor-pointer">Trending</p>
                </Link>
                <Link href="./pages/genres">
                    <p className="hover:underline cursor-pointer">Genres</p>
                </Link>
            </h1>
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
        </div>
    );
}