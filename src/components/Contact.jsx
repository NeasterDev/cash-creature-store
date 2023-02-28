export const Contact = () => {

    return (
        <section className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center">
                <h1>Contact Me</h1>
                <form>
                    <label className="mx-2" htmlFor="emailInput">Email</label>
                    <input className="border-2 rounded-sm p-1 text-sm active:border-blue-300" name="emailInput" type="email" />
                </form>
            </div>
            <div>(000)-000-0000</div>
            <div>cashcreatures@gmail.com</div>
        </section>
    )
}