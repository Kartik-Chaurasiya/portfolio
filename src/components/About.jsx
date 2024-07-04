import React from 'react'

const About = () => {
    return (
      <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                About
              </p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1050px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='sm:text-right text-4xl font-bold'>
                <p>Hi. I'm Kartik, nice to meet you. Please take a look around.</p>
              </div>
              <div>
                <p className='text-xl'>Certified Data Scientist known for creating machine learning models and data-driven insights that provide
                  a competitive edge. With 3+ years of experience, skilled in predictive modeling and data interpretation.
                  Dedicated to delivering insights that drive data-informed strategies and improved business performance
                  Detail oriented Data Scientist specializing in natural language processing and text mining. Proficient in
                  sentiment analysis, chatbot development, and extracting valuable information from unstructured text data
                  Data Scientist committed to enhancing data-driven real estate strategies</p>  
              </div>
            </div>
        </div>
      </div>
    );
  };

export default About