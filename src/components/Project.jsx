import React from 'react'
import '../assets/project.css';

const Project = () => {
  return (
    
    <div name="project"  className='w-full h-full bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1500px] mx-auto p-1 justify-center w-full h-full'>
        <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Project</p>
              <p className='py-4'>These are the Projects I've worked on</p>
          </div>
        <main className="page-content">
        <div className="card_pro">
            <div className="content">
            <h2 className="title">Emotune</h2>
            <p className="copy">Developed a music player mobile App that generates playlists by reading the
            emotions of the user from their selfie; Built the app using Flutter SDK and used
            Firebase for the backend.
            </p>
            <a href="https://github.com/Kartik-Chaurasiya/Emotune"><button className="btn">GitHub</button></a>
            </div>
        </div>
        <div className="card_pro">
            <div className="content">
            <h2 className="title">ToDo Api Project</h2>
            <p className="copy">Api for a todo project create user add or delete or update todo's for the user.</p>
            <a href="https://github.com/Kartik-Chaurasiya/Todo-Api"><button className="btn">GitHub</button></a>
            </div>
        </div>
        <div className="card_pro">
            <div className="content">
            <h2 className="title">Attendance System</h2>
            <p className="copy">An attendance management system is a cloud-based HR tech tool that enables 
            schools to automate their attendance management operations and keep track of students.</p>
            <a href="https://github.com/Kartik-Chaurasiya/Attendance_system"><button className="btn">GitHub</button></a>
            </div>
        </div>
        <div className="card_pro">
            <div className="content">
            <p className="copy">Streamlit: A full stack way of making data science project and dashboard.</p>
            <a href="https://share.streamlit.io/kartik-chaurasiya/amazing_streamlit_pro/main/web_app.py"><button className="btn">Project Link</button></a>
            </div>
        </div>
        <div className="card_pro">
            <div className="content">
            <h2 className="title"></h2>
            <p className="copy">Traffic signal Classifier: A deep learning approach for traffic sign Recognition</p>
            <a href="https://github.com/Kartik-Chaurasiya/Traffic-Sign-Recognition"><button className="btn">Project Link</button></a>
            </div>
        </div>
        <div className="card_pro">
            <div className="content">
            <h2 className="title">Comming Soon</h2>
            <p className="copy">More projects on GitHub</p>
            <a href="https://github.com/Kartik-Chaurasiya"><button className="btn">GitHub</button></a>
            </div>
        </div>
        <div className="card_pro">
            <div className="content">
            <h2 className="title">Comming Soon</h2>
            <p className="copy">More projects on GitHub</p>
            <a href="https://github.com/Kartik-Chaurasiya"><button className="btn">GitHub</button></a>
            </div>
        </div>
        <div className="card_pro">
            <div className="content">
            <h2 className="title">Comming Soon</h2>
            <p className="copy">More projects on GitHub</p>
            <a href="https://github.com/Kartik-Chaurasiya"><button className="btn">GitHub</button></a>
            </div>
        </div>
        <div className="card_pro">
            <div className="content">
            <h2 className="title">Comming Soon</h2>
            <p className="copy">More projects on GitHub</p>
            <a href="https://github.com/Kartik-Chaurasiya"><button className="btn">GitHub</button></a>
            </div>
        </div>
        <div className="card_pro">
            <div className="content">
            <h2 className="title">Comming Soon</h2>
            <p className="copy">More projects on GitHub</p>
            <a href="https://github.com/Kartik-Chaurasiya"><button className="btn">GitHub</button></a>
            </div>
        </div>
        </main>
        </div>
    </div>
  )
}

export default Project