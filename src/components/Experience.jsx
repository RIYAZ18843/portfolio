import React from 'react';
import 'react-vertical-timeline-component/style.min.css'; // Assuming this is for styling purposes
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Footer from './Footer'; // Importing Footer component

const Experience = () => {
  return (
    <section className='experience bg-black text-white pt-4 pt-16 overflow-x-hidden' id='experience'>
      <div className='pt-12 sm:px-16'>
        <p className='font-light'>MY JOURNEY SO FAR.</p>
        <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Work Experience</h2>

        <VerticalTimeline className="mt-8">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="05-Jun-2023 to 05-Mar-2024"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className='vertical-timeline-element-title'>Associate Analyst, Content Engineering</h3>
            <h4 className='vertical-timeline-element-subtitle'>GlobalLogic (A Hitachi Group Company), Hyderabad</h4>
            <p>
              <strong>Projects:</strong> AMMER, NCNG
            </p>
            <p>
              <strong>Client:</strong> HERE
            </p>
            <ul>
              <li>
                <strong>Project 1 (AMMER):</strong> Managed road navigation geocoding for both paved and unpaved roads using input shape file sources. <br />
                Executed SQL database coding while adhering to digitizing and attributing rules for various countries.
              </li>
              <li>
                <strong>Project 2 (NCNG):</strong> Verified and integrated data from community users into the database, ensuring accuracy according to established processes.
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* Add more VerticalTimelineElement for additional experiences */}
        </VerticalTimeline>
      </div>

      <Footer /> {/* Rendering the Footer component */}
    </section>
  );
}

export default Experience;
