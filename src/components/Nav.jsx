export const Nav = () => {

    return (
        <nav className="font-sans flex flex-col sm:flex-row items-center sm:justify-between bg-green-600">
            {/* title */}
            <div className="text-2xl p-2">
                <a href="#">Cash's Creatures</a>
            </div>
            {/* links */}
            <div className="flex my-auto">
                <a href="#" className="text-lg no-underline mx-2 hover:text-cyan-400">Creatures</a>
                <a href="#" className="text-lg no-underline mx-2 hover:text-cyan-400">About</a>
                <a href="#" className="text-lg no-underline mx-2 hover:text-cyan-400">Contact</a>
            </div>
        </nav>
    )
}