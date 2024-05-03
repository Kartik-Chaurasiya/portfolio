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
          Designed a statistical model to evaluate marketing campaign effectiveness, optimizing ad spending
        and increasing ROI by 35%.
          Automated data cleaning and preprocessing pipelines, saving over 200 hours of manual data
        preparation time per month.
          Led the integration of AI and ML technologies into product development, shortening the innovation
        cycle by 30%.
          Developed a machine learning model that predicted customer churn with 90% accuracy, reducing
        churn by 15% within the first year.
          Analyzed user behavior in a digital platform, which informed UI/UX improvements that increased
        conversion by 15%.
          Conducted complex data analyses influencing strategic decisions, leading to a 25% market share
        increase
        </p>
				{/* <span className="cd-date">Jan 18</span> */}
        <ul className="content-skills">
        <li>Python</li>
        <li>API</li>
        <li>Tensorflow</li>
        <li>Web Scraping</li>
        <li>NLP</li>
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
        Utilized ensemble learning techniques to improve the accuracy of predictive models by 15% over
        single-model approaches.
        Created a forecasting model for sales and demand, improving forecast accuracy by 20% and
        assisting in strategic planning.
        Designed a sentiment analysis model to monitor brand reputation in real-time, reducing negative
        feedback by 25%.
        Utilized unsupervised learning to uncover new customer segments, driving a targeted marketing
        strategy that increased sales by 12%.
        Created a forecasting tool for seasonal businesses, improving inventory management and reducing
        waste by 25%.
        Implemented a machine learning model to analyze satellite imagery, aiding environmental
        monitoring and conservation efforts.
        Developed an optimization model for route planning, improving delivery times by 25% for a
        logistics company.
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