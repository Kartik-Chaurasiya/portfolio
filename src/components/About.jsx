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
                <p className='text-xl'>My love for data stems from its inherent ability to reveal valuable insights and drive informed decision-making. With a strong 
                  academic background and practical experience, I am adept at extracting meaningful patterns from complex datasets. I am driven by 
                  a curiosity to explore new frontiers in data science and embrace innovative approaches to problem-solving. Through continuous 
                  learning and staying updated with the latest advancements, I am committed to delivering impactful solutions that make a
                   difference. Let's collaborate and harness the power of data to unlock a world of possibilities.</p>  
              </div>
            </div>
        </div>
      </div>
    );
  };

export default About