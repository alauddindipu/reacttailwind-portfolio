
import { HERO_CONTENT } from './../constants/index';
import profilePic from "../assets/newpic.jpg" ;
import Typewriter from '../../public/Typewriter';
const Hero = () => {
  return (
  <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                        bg-clip-text text-6xl tracking-tight text-transparent">
                        Alauddin Dipu
                        </h1>
                        <span className=" h-10 mt-4">
                            {/* Full Stack Learner */}
                            <Typewriter/>
                        </span>
                        <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center py-20'>
                    <img src={profilePic} className='rounded-2xl' alt="Alauddin Dipu" />
                </div>
            </div>
        </div>

  </div>
  )
}

export default Hero
