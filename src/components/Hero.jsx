import bgImage from '../assets/bg-image.jpg';

export const Hero = () => {

    return (
        <div className="bg-hero w-full h-96 lg:h-screen bg-cover bg-center flex justify-center items-center">
            <div className=' bg-white p-2'>
                <h1 className='text-6xl font-bold'>Cash's Creatures</h1>
                <p className='text-3xl italic'>We sell creatures for cash and take cash for creatures</p>
            </div>
            {/* <img src={bgImage} /> */}
        </div>
    )
}