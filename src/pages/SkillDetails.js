import React from 'react';
import '../styles/SkillDetails.css';
import RidingIcon from '../vectors/RidingIcon';

const SkillDetails = () => {
  return (
    <div className='skilldetails'>
      <nav className='nav-details'>
        <h3>Software development</h3>
      </nav>
      <section className='group'>
        <div className='group-top'>
          <p>Proficiency</p>
          <aside className='aside'>
            <RidingIcon />
            <p>Master/Influencer</p>
          </aside>
        </div>
        <article className='group-bottom'>
          <p className='firstP'>Recommendations</p>
          <p>7</p>
        </article>
      </section>
    </div>
  );
};

export default SkillDetails;
