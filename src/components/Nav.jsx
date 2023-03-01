export const Nav = () => {

    // const about = document.getElementById("about");
    // const contact = document.getElementById("contact");
    //const inventory = document.getElementById("inventory");



    return (
        <nav className="font-sans flex flex-col sm:flex-row items-center sm:justify-between bg-green-600">
            {/* title */}
            <div className="text-2xl p-3 font-bold">
                <a href="#" className="bg-white py-1 px-2">Cash's Creatures</a>
            </div>
            {/* links */}
            <div className="flex my-auto">
                <a href="/" className="text-lg no-underline mx-2 py-1 px-2 font-semibold hover:bg-white">Creatures</a>
                <a href="/#about" onClick={e => {
                    e.preventDefault();
                    document.querySelector("#about").scrollIntoView({behavior: "smooth"});
                }} className="text-lg no-underline mx-2 py-1 px-2 font-semibold hover:bg-white">About</a>
                <a href="/#contact" onClick={e => {
                    e.preventDefault();
                    document.querySelector("#contact").scrollIntoView({behavior: "smooth"});
                }} className="text-lg no-underline mx-2 py-1 px-2 font-semibold hover:bg-white">Contact</a>
            </div>
        </nav>
    )
}