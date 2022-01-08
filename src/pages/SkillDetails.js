import React from 'react';
import '../styles/SkillDetails.css';
import EyeIcon from '../vectors/EyeIcon';
import RidingIcon from '../vectors/RidingIcon';
import StarIcon from '../vectors/StarIcon';

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
      <div className='br' />
      <section className='others'>
        <h4 className='otherHeader'>Other people with this skill:</h4>
        <article className='otherCard'>
          <div className='card-left'>
            <img src='images/img.jpg' alt='' width={40} height={40} />
            <aside className='name'>
              <div className='top'>
                <p>Khan Yu</p>
                <StarIcon />
              </div>
              <div className='bottom'>Web developer</div>
            </aside>
          </div>
          <div className='card-right'>
            <aside className='eye'>
              <EyeIcon />
            </aside>
          </div>
        </article>
      </section>
    </div>
  );
};

export default SkillDetails;
