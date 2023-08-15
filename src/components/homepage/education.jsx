// EducationSection.js
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Education = () => {
  return (
    <>
      <h2 className="education-title">Education</h2>
    <VerticalTimeline
    lineColor={'grey'}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#65656d', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #65656d' }}
        iconStyle={{ background: '#65656d', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faGraduationCap} />}
      >
        <h4 className="vertical-timeline-element-title">MSc in IT</h4>
        <h5 className="vertical-timeline-element-subtitle">Université Toulouse 1 Capitole - 2020 - 2022</h5>
        <p>
          <ul>
            <li> Advanced Programming</li>
            <li> Machine learning</li>
            <li> Big Data / No SQL DB</li>
            <li> Agile Management</li>
            <li> Business process management</li>
            <li> IS transformation</li>
          </ul></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#65656d', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #65656d' }}
        iconStyle={{ background: '#65656d', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faGraduationCap} />}
      >
        <h4 className="vertical-timeline-element-title">BSc in IT</h4>
        <h5 className="vertical-timeline-element-subtitle">Université Toulouse 1 Capitole - 2019 - 2020</h5>
        <p>
          <ul>
            <li> CS fundamentals</li>
            <li> Web development</li>
            <li> Database management</li>
            <li> Project Management</li>
          </ul></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#65656d', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #65656d' }}
        iconStyle={{ background: '#65656d', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faGraduationCap} />}
      >
        <h4 className="vertical-timeline-element-title">BSc in Econ</h4>
        <h5 className="vertical-timeline-element-subtitle">Université Toulouse 1 Capitole - 2016 - 2019</h5>
        <p>
          <ul>
            <li>Mathematics</li>
            <li>Microeconomics</li>
            <li>Macroeconomics</li>
            <li>Accounting</li>
          </ul></p>
      </VerticalTimelineElement>
    </VerticalTimeline>
      </>
  );
};

export default Education;
