import React from 'react';
import '../styles/Main.css';
import Proficient from '../vectors/Proficient';
import RidingIcon from '../vectors/RidingIcon';
import { Link } from 'react-router-dom';

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
      <section className='skills'>
        <h3 className='skillHeader'>Skills and interest:</h3>
        <div className='skillFlex'>
          <RidingIcon />
          <p>Master / Influencer</p>
        </div>
        <article className='skillBtn'>
          <Link to='/details'>
            <button>Software dev</button>
          </Link>
          <Link to='/details'>
            <button>Team management</button>
          </Link>
          <Link to='/details'>
            <button>javaScript</button>
          </Link>
          <Link to='/details'>
            <button>Git</button>
          </Link>
          <Link to='/details'>
            <button>Typescript</button>
          </Link>
          <Link to='/details'>
            <button>REST API</button>
          </Link>
        </article>
      </section>
      <section className='proficient'>
        <div className='proficientFlex'>
          <Proficient />
          <p>Proficient</p>
        </div>
        <article className='proficientBtn'>
          <button>Testing</button>
          <button>Data</button>
          <button>Functional</button>
          <button>Reactive</button>
          <button>Kotlin</button>
          <button>Interface design</button>
        </article>
      </section>
      <div className='br' />
      <section className='interest'>
        <p className='interestParagragh'>Industries and sectors of interest:</p>
        <button>Open to any industry/sector</button>
      </section>
      <div className='br' />
      <section className='languages'>
        <p className='langHeader'>Languages:</p>
        <button>Spanish - Conversational</button>
        <button>English - Fully Fluent</button>
      </section>
    </div>
  );
};

export default Main;
