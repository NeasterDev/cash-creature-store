export const Nav = () => {

    return (
        <nav className="font-sans flex flex-col sm:flex-row items-center sm:justify-between bg-green-600">
            {/* title */}
            <div className="text-2xl p-3 font-bold">
                <a href="#" className="bg-white py-1 px-2">Cash's Creatures</a>
            </div>
            {/* links */}
            <div className="flex my-auto">
                <a href="#" className="text-lg no-underline mx-2 py-1 px-2 font-semibold hover:bg-white">Creatures</a>
                <a href="#" className="text-lg no-underline mx-2 py-1 px-2 font-semibold hover:bg-white">About</a>
                <a href="#" className="text-lg no-underline mx-2 py-1 px-2 font-semibold hover:bg-white">Contact</a>
            </div>
        </nav>
    )
}