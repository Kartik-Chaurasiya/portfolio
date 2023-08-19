import React from 'react'
import { Link } from 'react-scroll';
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600 text-2xl'>Hi my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Kartik J Chaurasiya</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I love Data.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'> A data scientist with a deep passion for unlocking insights from data.
             I am captivated by the intersection of mathematics, technology, and data analysis. Through my academic journey and practical
              experience, I have developed a strong foundation in statistical analysis, machine learning, and data visualization. 
              I believe that data has the potential to drive informed decision-making and shape a better future.</p>
              <p className='text-[#8892b0] py-4 max-w-[700px]'>As the renowned statistician W. Edwards Deming once said,
                <b className='text-pink-600 py-4 max-w-[700px] text-xl'> "In God we trust, all others must bring data." </b>
                I strive to be that "other" who brings forth the power of data to make a difference.</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    <Link to='project' smooth={true} duration={500}>
                View Work
                </Link>
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                    </span>
                    </button>
                </div>
        </div>
    </div>
  )
}

export default Home