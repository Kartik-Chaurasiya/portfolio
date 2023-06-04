import React from 'react'
import '../assets/exp.css';

const Exp = () => {
  return (
    <div name="exp"  className='w-full h-full bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1500px] mx-auto p-1 justify-center w-full h-full'>
        <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Experience</p>
              <p className='py-4'>StoryLine</p>
          </div>
        <section id="cd-timeline" className="cd-container">
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-picture">
			</div>

			<div className="cd-timeline-content">
				<h2>Bachelor's in Computer Science</h2>
        <div className="timeline-content-info">
          <span className="timeline-content-info-title">
            <i className="fa fa-certificate" aria-hidden="true"></i>
            Universal College of Engineering
          </span> 
          <span className="timeline-content-info-date">
            <i className="fa fa-calendar-o" aria-hidden="true"></i>
            June 2017 - May 2021
          </span>
        </div>
				<p>I commenced my Bachelor's degree in Computer Science Engineering in 2017 at Universal College of Engineering. This pivotal period marked the beginning of my academic journey, where I acquired a comprehensive understanding of the fundamental principles and concepts of computer science.</p>
        <ul className="content-skills">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Wordpress</li>
        </ul>
			</div> 
		</div> 

		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-movie">
			</div> 

			<div className="cd-timeline-content">
				<h2>Software Engineer Intern</h2>
                    <div className="timeline-content-info">
            <span className="timeline-content-info-title">
                <i className="fa fa-certificate" aria-hidden="true"></i>
                Vistaar Digital Communications
            </span>
            <span className="timeline-content-info-date">
                <i className="fa fa-calendar-o" aria-hidden="true"></i>
                June 2018 - July 2018
            </span>
            </div>
				<p>Utilized the Cobalt framework to design and develop mobile applications, ensuring seamless user experiences and high-performance functionalities.

          Demonstrated strong expertise in front-end web technologies, including HTML, CSS, and JavaScript, to implement responsive and visually appealing interfaces for the mobile applications.</p>
				{/* <span className="cd-date">Jan 18</span> */}
        <ul className="content-skills">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Cobalt Framework</li>
        </ul>
			</div> 
		</div> 

		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-picture">
			</div> 

			<div className="cd-timeline-content">
				<h2>Data Analytics Intern</h2>
                <div className="timeline-content-info">
          <span className="timeline-content-info-title">
            <i className="fa fa-certificate" aria-hidden="true"></i>
            Vistaar Digital Communications
          </span>
          <span className="timeline-content-info-date">
            <i className="fa fa-calendar-o" aria-hidden="true"></i>
            Dec 2020 - Jan 2021
          </span>
        </div>
				<p>Built visualizations using visualization tools such as Tableau and Matplotlib to
          communicate insights from data.
          Adept at working with databases and have experience in data manipulation and
          extraction.
          Detected outliers and build models using programming languages such as R
          and Python.
          Hands-on experience with Python libraries such as Pandas, NumPy, and Scikit learn</p>
				{/* <span className="cd-date">Jan 24</span> */}
			</div> 
		</div> 

		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
			</div> 

			<div className="cd-timeline-content">
				<h2>Software Engineer</h2>
                <div className="timeline-content-info">
          <span className="timeline-content-info-title">
            <i className="fa fa-certificate" aria-hidden="true"></i>
            Kredence Digital Resources
          </span>
          <span className="timeline-content-info-date">
            <i className="fa fa-calendar-o" aria-hidden="true"></i>
            Nov 2021 - May 2022
          </span>
        </div>
				<p>Built a project and resource management website using Laravel with PHP for
          the backend and React for the front end.
          Competent in utilizing databases and caching systems for performance
          optimization and improved user experience.
          Adept at developing and deploying RESTful APIs and microservices.
          Strong understanding of software engineering best practices such as
          continuous integration, testing, and security.
          Implemented an MYSQL-based database for the project, optimized for fast data
          retrieval and analytics.</p>
				{/* <span className="cd-date">Feb 14</span> */}
			</div> 
		</div> 

		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
			</div> 

			<div className="cd-timeline-content">
				<h2>Graduate Research Assistant</h2>
                <div className="timeline-content-info">
          <span className="timeline-content-info-title">
            <i className="fa fa-certificate" aria-hidden="true"></i>
            Georgia State University
          </span>
          <span className="timeline-content-info-date">
            <i className="fa fa-calendar-o" aria-hidden="true"></i>
            Jan 2023 - Present
          </span>
        </div>
				<p>A study of filaments and solar flare activities was conducted in order to detect
        the occurrence of solar flares.
        Developed methods for retrieving images from the GONG satellite network.
        Analyzed the sampling data from each satellite and created visualizations.
        Carried out annotations on satellite images and information retrieval from the v7
        annotation web page utilizing APIs.
        </p>
				{/* <span className="cd-date">Feb 18</span> */}
			</div> 
		</div> 
	</section> 
    </div>
    </div>
  )
}

export default Exp