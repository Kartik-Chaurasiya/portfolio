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
				<h2>🎓 Bachelor's in Computer Science</h2>
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
        <li>Python</li>
        <li>JavaScript</li>
        <li>Web Dev</li>
        <li>Algorithms</li>
        <li>Databases</li>
        <li>Networking</li>
        <li>Machine Learning</li>
        </ul>
			</div> 
		</div> 

		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-movie">
			</div> 

			<div className="cd-timeline-content">
				<h2>💼 Data Scientist</h2>
                    <div className="timeline-content-info">
            <span className="timeline-content-info-title">
                <i className="fa fa-certificate" aria-hidden="true"></i>
                Intex Technologies
            </span>
            <span className="timeline-content-info-date">
                <i className="fa fa-calendar-o" aria-hidden="true"></i>
                Jan 2020 - July 2022
            </span>
            </div>
				<p>
        Innovated marketing strategies through a statistical model, elevating ROI by 35%. 
        Streamlined operations by automating data preprocessing, saving over 200 hours monthly. 
        Spearheaded AI and ML integration, accelerating product development by 30%. 
        Developed a predictive model reducing customer churn by 15% and enhanced UI/UX 
        based on behavioral analysis, driving a 15% increase in conversion rates
        </p>
				{/* <span className="cd-date">Jan 18</span> */}
        <ul className="content-skills">
        <li>Python</li>
        <li>API</li>
        <li>Data Automation</li>
        <li>Web Scraping</li>
        <li>Statistical Modeling</li>
        <li>AI/ML Integration</li>
        </ul>
			</div> 
		</div> 

    <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
			</div> 

			<div className="cd-timeline-content">
				<h2>🎓 Data Science Master's</h2>
                <div className="timeline-content-info">
          <span className="timeline-content-info-title">
            <i className="fa fa-certificate" aria-hidden="true"></i>
            Georgia State University
          </span>
          <span className="timeline-content-info-date">
            <i className="fa fa-calendar-o" aria-hidden="true"></i>
            Aug 2022 - May 2024
          </span>
        </div>
				<p>Georgia State University:
          My time at Georgia State University has been an exhilarating voyage into Data Science. 
          Pursuing a Master's degree in Data Science, I've immersed myself in cutting-edge technologies 
          and methodologies that underpin the world of data-driven insights.
        </p>
				{/* <span className="cd-date">Feb 18</span> */}
        <ul className="content-skills">
        <li>Python</li>
        <li>Data Mining</li>
        <li>Machine Learning</li>
        <li>Deep Learning</li>
        </ul>
			</div> 
		</div> 

		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
			</div> 

			<div className="cd-timeline-content">
				<h2>🔬 Graduate Research Assistant</h2>
                <div className="timeline-content-info">
          <span className="timeline-content-info-title">
            <i className="fa fa-certificate" aria-hidden="true"></i>
            Georgia State University
          </span>
          <span className="timeline-content-info-date">
            <i className="fa fa-calendar-o" aria-hidden="true"></i>
            Jan 2023 - Aug 2023
          </span>
        </div>
				<p>
          Developed a pipeline of containerized modules for pre-processing of image data.
          Compared performance of different DNN algorithms (e.g., UNet, UNet++, Mask-RCNN) in terms of segmentation
          granularity.
          Dockerized the best model (Mask R-CNN) on the lab's server to feed the front end (www.gonghalphaviewer.com).
        </p>
				{/* <span className="cd-date">Feb 18</span> */}
        <ul className="content-skills">
        <li>API</li>
        <li>Neural Networks</li>
        <li>Docker</li>
        <li>Server Deployment</li>
        </ul>
			</div> 
		</div> 

    <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
			</div> 

			<div className="cd-timeline-content">
				<h2>💼 Data Scientist</h2>
                <div className="timeline-content-info">
          <span className="timeline-content-info-title">
            <i className="fa fa-certificate" aria-hidden="true"></i>
            Northern Trust - USA
          </span>
          <span className="timeline-content-info-date">
            <i className="fa fa-calendar-o" aria-hidden="true"></i>
            Aug 2023 - Present
          </span>
        </div>
				<p>
        I specialize in applying advanced machine learning techniques to solve real-world challenges. 
        My expertise includes developing forecasting models that significantly improve accuracy, 
        designing sentiment analysis algorithms to enhance brand reputation, and utilizing 
        unsupervised learning to identify new customer segments. Additionally, 
        I have experience in implementing machine learning models for diverse applications such as 
        environmental monitoring and logistics optimization.
        </p>
				{/* <span className="cd-date">Feb 18</span> */}
        
        <ul className="content-skills">
        <li>Ensemble Learning</li>
        <li>Sentiment Analysis</li>
        <li>Unsupervised Learning</li>
        <li>Tensorflow & Pytorch</li>
        </ul>
			</div> 
		</div> 
	</section> 
    </div>
    </div>
  )
}

export default Exp