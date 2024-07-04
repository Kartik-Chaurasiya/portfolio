import React from "react";
import { Tabs, Card } from "flowbite-react";

export function Project({ categorizedProjects = {} }) {
  return (
    <div name="project" className="py-10 w-full h-full bg-[#0a192f] text-gray-300">
        <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Project</p>
              <p className='py-4'>These are the Projects I've worked on</p>
          </div>
      <div className="pl-20 pr-10">
      <Tabs aria-label="Projects Tabs" variant="pills">
        {Object.entries(categorizedProjects).map(([category, projects], index) => (
          <Tabs.Item key={index} active={index === 0} title={category}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="max-w-sm"
                  imgAlt={`Image for ${project.name}`}
                  imgSrc={project.imgSrc}
                >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {project.name}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {project.description}
                  </p>
                  <a href={project.link} className="text-blue-500 hover:underline break-words">
                    {project.link}
                  </a>
                  <div className="mt-4">
                    <h6 className="text-xl font-semibold text-gray-900 dark:text-white">Technologies</h6>
                    <div className="flex flex-wrap mt-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 mb-2">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Tabs.Item>
        ))}
      </Tabs>
      </div>
    </div>
  );
}
