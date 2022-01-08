import React from 'react';
import '../styles/Main.css';

const Main = () => {
  return (
    <div>
      <section className='about'>
        <div className='aboutImg'>
          <img src='/images/img.jpg' alt='' />
        </div>
        <h3 className='aboutName'>Diamond Nicholas</h3>
        <h4 className='aboutJob'>Software Engineer</h4>
        <h5 className='aboutLocation'>Lagos, Nigeria</h5>
        <p className='aboutSummary'>
          Fullstack web developer and open-source enthusiast with good coding
          practices. Pair-programming and remote work. Fluent in several
          languages, frameworks, and technologies, and capable of ramping up
          quickly and efficiently. A result oriented Individual, astute with a
          strong Technical Operations background. Deep familiarity in ICT and
          digital forensic, thoroughly proficient in performing corrective and
          preventive maintenance, Installation of cabling equipment routine
          inspection. Immense knowledge with raw and processed numbers and
          analytical experience. Top levels of manual dexterity and technical
          knowledge result in a track record of excellent work. Honed
          competencies in Procurement and Logistics Processes, Management,
          Telecommunication, Network Operations and Development.
        </p>
      </section>
    </div>
  );
};

export default Main;