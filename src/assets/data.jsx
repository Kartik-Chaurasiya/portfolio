const skills = {
    "Data Science": [
      "Python",
      "R",
      "TensorFlow",
      "PyTorch",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "A/B Testing",
      "Database Management (SQL, NoSQL)",
      "ETL (Extract, Transform, Load) Processes", 
      "Data Pipeline Automation"
    ],
    "Frontend Development": [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap"
    ],
    "Backend Development": [
      "Django",
      "Flask",
      "FastAPI",
      "Java",
      "Laravel",
      "PHP"
    ],
    "Mobile Development": [
      "React Native",
      "Flutter"
    ],
    "DevOps": [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "CI/CD",
      "AWS",
      "Google Cloud",
      "Data Bricks",
      "Firebase",
    ]
  };
  
  const projects = {
    "Data Science": [
      {
        name: "Master's Thesis - Filament segmentation in Solar Observations",
        description: "A project to segment filaments in solar observations using deep learning.",
        link: "https://github.com/Kartik-Chaurasiya/AML_Project",
        imgSrc: "https://aasnova.org/wp-content/uploads/2019/04/fig1-9.jpg",
        technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "PyTorch", "Docker", "Unet", "Mask RCNN"]
      },
      {
        name: "Automated-Text-Summarization-using-Deep-Learning",
        description: "A project to summarize text using deep learning techniques.",
        link: "https://github.com/Vinayrevanuru1/Automated-Text-Summarization-using-Deep-Learning",
        imgSrc: "https://miro.medium.com/v2/resize:fit:1064/1*GIVviyN9Q0cqObcy-q-juQ.png",
        technologies: ["Python", "TensorFlow", "scikit-learn", "NLTK", "Seq2Seq", "Bert"]
      },
      {
        name: "Traffic-Sign-Recognition",
        description: "A project to recognize traffic signs using deep learning.",
        link: "https://github.com/Kartik-Chaurasiya/Traffic-Sign-Recognition",
        imgSrc: "https://fnsautoglass.com/wp-content/uploads/2022/10/Traffic-Sign-Recognition3.png",
        technologies: ["Python", "TensorFlow", "scikit-learn", "OpenCV"]
      },
      {
        name: "Sales Prediction - Time Series Forecasting",
        description: "A project to predict sales using time series forecasting techniques.",
        link: "https://github.com/Kartik-Chaurasiya/streamlit_predict_sales",
        imgSrc: "https://dlabs.ai/wp-content/uploads/2020/12/sales-prediction-tips.png",
        technologies: ["Python", "TensorFlow", "scikit-learn", "Prophet", "ARIMA", "LSTM", "Streamlit"]
      }
    ],
    "Data Engeenering": [
      {
        name: "Uber Data Engineering Project",
        description: "This project demonstrates an end-to-end data engineering pipeline using Google Cloud Platform (GCP) services, Mage AI for ETL processes, and Looker Studio for data visualization. The pipeline processes and analyzes Uber trip data.",
        link: "https://github.com/Kartik-Chaurasiya/Uber-Data-Analysis",
        imgSrc: "https://i.ibb.co/gPy3s8g/uber.png",
        technologies: ["Python", "SQL", "GCP", "MageAI", "Looker Studio", "BigQuery", "Dataflow", "Cloud Storage"]
      }
    ],
    "Web Development": [
      {
        name: "Charity - A Charity Website",
        description: "A website for a charity organization built with React",
        link: "https://jannat-welfare.netlify.app/",
        imgSrc: "https://i.ibb.co/hWHvt5x/charity.png",
        technologies: ["React", "Tailwind CSS", "Netlify"]
      },
      {
        name: "Lofi App - A Music App",
        description: "A music app that plays lofi music and lofi gifs in the background.",
        link: "https://github.com/ujju12345/Lofi_Music_WebApp",
        imgSrc: "https://helios-i.mashable.com/imagery/articles/03YdX6DpDbpI8LRuVEOC4vp/images-2.fill.size_2000x1079.v1681234650.png",
        technologies: ["React", "Firebase", "Heroku"]
      },
      {
        name: "Todo API",
        description: "A RESTful API for a todo application built with FastAPI.",
        link: "https://github.com/Kartik-Chaurasiya/Todo-Api",
        imgSrc: "https://chisellabs.com/glossary/wp-content/uploads/2021/06/What-is-an-API.png",
        technologies: ["FastAPI", "PostgreSQL", "Docker"]
      }
    ],
    "Mobile Development": [
      {
        name: "Emotune - Emotion-based Music Player",
        description: "A music player that recommends songs based on the user's mood.",
        link: "https://github.com/Kartik-Chaurasiya/Emotune",
        imgSrc: "https://manhattanmentalhealthcounseling.com/wp-content/uploads/2022/11/How-to-be-less-emotional-scaled.jpeg",
        technologies: ["Flutter", "Firebase", "scikit-learn", "TensorFlow", "Python"]
      }
    ],
  };

  const certifications = [
    {
      name: "AWS Certified Solutions Architect – Associate (SAA), Amazon Web Services",
      date: "Jan 2024",
      link: "https://drive.google.com/file/d/1jLbbevYQ8P2USqgQVQroYgbFRFeP41jl/view?usp=sharing"
    }
  ];
  
  const courses = [
    
    {
      name: "100 Days of Code - The Complete Python Pro Bootcamp for 2021, Udemy",
      date: "Sept 2021",
      link: "https://drive.google.com/file/d/1mZ_SA00RiznsuROkuJaywP6hJt6VaG8_/view?usp=sharing"
    },
    {
      name: "DeepLearning.AI by Andrew Ng, Coursera",
      date: "Jan 2020",
      link: "https://drive.google.com/file/d/1bEHYRIyZN5Gz1OQjnScRSctpLipRPjUU/view?usp=sharing"
    }
  ];

  const papers = [
    {
      name: "Scientific Reports - Manual Annotation of Scientific Images: How to Prepare for Large Projects -  #SDATA-24-01811",
      date: "July 2024",
      link: "#"
    },
    {
      name: "Poster SWW 24 - A Statistical Anomaly Detection Algorithm for GONG’s H-Alpha Observations",
      date: "April 2024",
      link: "https://drive.google.com/file/d/1TEpR7NJ3P9IQkWOZZQvQOT-RYVDl3GUg/view?usp=sharing"
    },
    {
      name: "Emotion-based Music Player. International Journal of Research and Analytical Reviews, Vol 8 Issue 2, [IJRAR_233429]",
      date: "May 2021",
      link: "https://www.ijrar.org/papers/IJRAR21B1343.pdf"
    },
  ];
  
  export { skills, projects, certifications, courses, papers};
  