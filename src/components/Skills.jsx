import React from 'react'
import '../assets/skills.css';

const Skills = () => {
  return (
    <div name="skills"  className='w-full h-full bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1500px] mx-auto p-1 justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>These are the technologies I've worked with</p>
          </div>
            <div className='w-full sm:grid-cols-4 gap-4 text-center py-8'>
            <div className="cards-list">
                <div className="card 1">
                    <div className="card_image"> <img alt='' src="https://preview.redd.it/one-of-the-only-logos-that-dont-have-to-change-in-support-v0-hewrzv1fi8k81.jpg?width=640&crop=smart&auto=webp&s=d9143d67ab173e1ca9fffaafbf18f5e1477f9391" /> </div>
                    <div className="card_title title-white">
                    <p>Python</p>
                    </div>
                </div>
                <div className="card 1">
                    <div className="card_image"> <img alt='' src="https://techinfologies.com/wp-content/uploads/2022/07/neural-networks-in-machine-learning-1.png" /> </div>
                    <div className="card_title title-white">
                    <p>Machine/Deep Learning</p>
                    </div>
                </div>
                <div className="card 1">
                    <div className="card_image"> <img alt='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_0OOoH4EBpI3ZGI-7mitOvxwFwlboHmRR4g&usqp=CAU" /> </div>
                    <div className="card_title title-white">
                    <p>-------</p>
                    </div>
                </div>
                <div className="card 1">
                    <div className="card_image"> <img alt='' src="https://f.hubspotusercontent10.net/hubfs/6448316/web-programming-languages.jpg" /> </div>
                    <div className="card_title title-white">
                    <p>Web App Tools[HTML, CSS, React, MySQL]</p>
                    </div>
                </div>
                </div>
                <div className="cards-list">
                <div className="card 1">
                    <div className="card_image"> <img alt='' src="https://tshirtgeek.co/wp-content/uploads/2021/08/com037-scaled.jpg" /> </div>
                    <div className="card_title title-white">
                    <p>--------</p>
                    </div>
                </div>
                <div className="card 1">
                    <div className="card_image"> <img alt='' src="https://e7.pngegg.com/pngimages/592/502/png-clipart-logo-application-programming-interface-computer-programming-application-software-api-text-photography.png" /> </div>
                    <div className="card_title title-white">
                    <p></p>
                    </div>
                </div>
                <div className="card 1">
                    <div className="card_image"> <img alt='' src="https://miro.medium.com/v2/resize:fit:1200/1*JGX_73t5885n_kQWW73qqg.png" /> </div>
                    <div className="card_title title-white">
                    <p></p>
                    </div>
                </div>
                <div className="card 1">
                    <div className="card_image"> <img alt='' src="https://www.malwarebytes.com/blog/news/2023/03/easset_upload_file13810_262604_e.png" /> </div>
                    <div className="card_title title-white">
                    <p></p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills