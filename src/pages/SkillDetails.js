/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import '../styles/SkillDetails.css';
import CloseIcon from '../vectors/CloseIcon';
import EyeIcon from '../vectors/EyeIcon';
import RidingIcon from '../vectors/RidingIcon';
import StarIcon from '../vectors/StarIcon';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SkillDetails = () => {
  const [bio, setBio] = useState([]);
  const [error, setError] = useState('');

  const getBio = async () => {
    const url = 'api/bios/diamondnicholas154';
    try {
      const res = await axios.get(url, { mode: 'cors' });
      setBio(res);
      console.log('====================================');
      console.log(res);
      console.log('====================================');
    } catch (error) {
      setError(error.message, 'something wrong with this request');
    }
  };

  useEffect(() => {
    getBio();
  }, []);
  console.log('====================================');
  console.log(bio);
  console.log('====================================');
  if (error) return <h1>{error}</h1>;

  return (
    <div className='skilldetails'>
      <nav className='nav-details'>
        <div className='close'>
          <Link to='/'>
            <CloseIcon />
          </Link>
        </div>
        <h3>Software development</h3>
        <h4 className='hide'>invinsible</h4>
      </nav>
      {/* {bio.map(({ id, pictureThumbnail, summaryOfBio }) => ( */}
      <section className='group'>
        {/* key={id} */}
        <div className='group-top'>
          <p>Proficiency</p>
          {/* <p>{summaryOfBio}</p> */}
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
      {/* ))} */}
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
