import React from "react";
import { Tabs, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export function Certifications({ certifications = [], courses = [], papers = []}) {
  return (
    <div name="certifications"  className='dark py-10 w-full h-full bg-[#0a192f] text-gray-300'>
        <div>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Certifications</p>
        <p className='py-4'>Badge of Honours</p>
        </div>
      <div className="pr-10 pl-20">
      <Tabs aria-label="Certifications and Courses Tabs" variant="pills">
        <Tabs.Item active title="Certifications">
          <div className="overflow-x-auto">
            <Table hoverable>
              <TableHead>
                <TableHeadCell>Certification Name</TableHeadCell>
                <TableHeadCell>Date</TableHeadCell>
                <TableHeadCell>Certificate Link</TableHeadCell>
              </TableHead>
              <TableBody className="divide-y">
                {certifications.map((cert, index) => (
                  <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {cert.name}
                    </TableCell>
                    <TableCell>{cert.date}</TableCell>
                    <TableCell>
                      <a href={cert.link} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        View Certificate
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Courses">
          <div className="overflow-x-auto">
            <Table hoverable>
              <TableHead>
                <TableHeadCell>Course Name</TableHeadCell>
                <TableHeadCell>Date</TableHeadCell>
                <TableHeadCell>Certificate Link</TableHeadCell>
              </TableHead>
              <TableBody className="divide-y">
                {courses.map((course, index) => (
                  <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {course.name}
                    </TableCell>
                    <TableCell>{course.date}</TableCell>
                    <TableCell>
                      <a href={course.link} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        View Certificate
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Papers">
          <div className="overflow-x-auto">
            <Table hoverable>
              <TableHead>
                <TableHeadCell>Paper Name</TableHeadCell>
                <TableHeadCell>Date</TableHeadCell>
                <TableHeadCell>Paper Link</TableHeadCell>
              </TableHead>
              <TableBody className="divide-y">
                {papers.map((papers, index) => (
                  <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {papers.name}
                    </TableCell>
                    <TableCell>{papers.date}</TableCell>
                    <TableCell>
                      <a href={papers.link} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        View Paper
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Tabs.Item>
      </Tabs>
      </div>
    </div>
  );
}

