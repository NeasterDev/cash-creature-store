import aboutMeImg from "../assets/aboutme-img.jpg";

export const About = () => {

    return ( 
        <section id="about" className="flex flex-col justify-center items-center ">
            <div>
                <h1 className="text-3xl font-bold">About me</h1>
            </div>
            <div className="px-4 py-2 flex flex-col sm:flex-row">
                <div className="flex-1 p-2">
                    <img src={aboutMeImg}  />
                </div>
                <div className="flex-1 p-2">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus voluptatem perspiciatis iusto. Accusamus perferendis iusto deleniti dolor atque. Officiis non debitis laboriosam aliquam dignissimos consequatur quas delectus provident repellendus eius?</p>
                </div>
                
            </div>
        </section>
    )
}