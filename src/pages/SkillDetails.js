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
      <div className='br' />
      <section className='experience'>
        <h4 className='expHeader'>Diamond's related experiences.</h4>
        <article className='founding'>
          <h4 className='foundingHeader'>Founding Member and Tech Lead</h4>
          <p>The Executive Company</p>
          <p>Feb 2015 - Dec 2017</p>
        </article>
        <article className='founding'>
          <h4 className='foundingHeader'>Founding Member and Tech Lead</h4>
          <p>The Executive Company</p>
          <p>Feb 2015 - Dec 2017</p>
        </article>
      </section>
    </div>
  );
};

export default SkillDetails;
