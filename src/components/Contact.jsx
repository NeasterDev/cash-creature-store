export const Contact = () => {

    return (
        <section id="contact" className="flex flex-col justify-center items-center ">
            <h1 className="font-bold text-center mb-4">If you have any questions and would like to get in touch please feel free to reach out</h1>
            <form action="mailto:cashcreatures@gmail.com" method="post" encType="text/plain" className=" w-1/2 flex flex-col items-center">
                <div className="border-b-2 border-gray-400 mb-4">
                    <input className="w-72 p-2" type="text" name="name" placeholder="Your name"></input>
                </div>
                <div className="border-b-2 border-gray-400 mb-4">
                    <input className="w-72 p-2" type="text" name="email" placeholder="Your email"></input>
                </div>
                <div>
                    <textarea className="w-72 p-2 border-b-2 border-gray-400" placeholder="Your message" name="message"></textarea>
                </div>
                <div>
                    <input type="submit" value="Send Message" className="w-72 border-2 border-black font-bold p-2 mt-4 hover:bg-gray-200 hover:cursor-pointer"></input>
                </div>
            </form>
            <div>
                <h1 className="font-bold text-center my-4">Or feel free to call at</h1>
                <a className=" hover:text-green-600 font-bold" href="tel:000-000-0000">(000)-000-0000</a>
            </div>
        </section>
    )
}