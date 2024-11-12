
import { HERO_CONTENT } from './../constants/index';
import profilePic from "../assets/newpic.jpg";
import Typewriter from '../../public/Typewriter';
const Hero = () => {
    return (
        <div className=''>
            <div className="border-b border-neutral-900 pb-4">
                <div className="flex flex-wrap">
                    <div className="flex justify-center w-full lg:w-1/2">
                        <div className="flex flex-col items-center lg:items-start">
                            <h1 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                        bg-clip-text text-4xl tracking-tight text-transparent">
                                Alauddin Dipu
                            </h1>
                            <span className=" h-10 mt-4">
                                <Typewriter />
                            </span>
                            <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</p>
                        </div>
                    </div>
                    <div className='flex justify-center  w-full lg:w-1/2'>
                        <div className='py-20 max-w-sm md:max-w-md lg:max-w-lg'>
                            <img src={profilePic} className='rounded-2xl' alt="Alauddin Dipu" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero
