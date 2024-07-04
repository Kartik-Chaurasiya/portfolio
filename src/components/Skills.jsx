import React from "react";
import { Tabs } from "flowbite-react";

export function Skills({ categorizedSkills = {} }) {
  return (
    <div name="skills"  className='py-10 w-full h-full bg-[#0a192f] text-gray-300'>
        <div>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
        <p className='py-4'>These are the technologies I've worked with</p>
          </div>
    <div className="pl-20 pr-10 dark w-full">
      <Tabs aria-label="Skills Tabs" variant="pills">
        {Object.entries(categorizedSkills).map(([category, skills], index) => (
          <Tabs.Item key={index} active={index === 0} title={category}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg"
                >
                  <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {skill}
                  </h5>
                </div>
              ))}
            </div>
          </Tabs.Item>
        ))}
      </Tabs>
    </div>
    </div>
  );
}
