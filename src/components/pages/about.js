import React from 'react';
import profilePicture from '../../../static/assets/images/bio/headshot.jpg';

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: 'url(' + profilePicture + ') no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="right-column">
        <p>Jill Stemm has been married for fifteen years and is the mom of two teenagers. 
          She resides in Ohio and was born and raised there. Okay let’s stop talking about 
          me in the third person as if I am not the one writing this content, it is kind 
          of weirding me out. While I am still considered a junior developer in terms of 
          hours I have adequate education, a desire to learn something new every day, and 
          the people skills to connect with my colleagues.</p>

        <p>
        I obtained my Associates of Applied Science in Information Technology through the 
        distance learning program at Kaplan University. I completed my degree in twenty-seventeen. 
        At the conclusion of my degree, I felt like an impostor, so I didn’t pursue a career in 
        development. Instead, I continued taking classes through Udemy and other online resources 
        to practice my skills. My most recent accomplishment is completing Devcamp’s Full Stack 
        Python and React Bootcamp, where I was instructed by Jordan Hudgens and completed several 
        projects under his direction. I am a lot more confident in my development abilities at this 
        point and feel comfortable saying I can design applications using Java, JavaScript, Python, 
        or React.</p>

        <p>
        I am a huge geek that loves to learn; I consider myself a lifelong learner and love the 
        challenge of learning new skills and building on them. That moment when you have been stuck 
        trying to debug a program for hours or implement a new feature and finally get it working, 
        that very moment that will push most people into quitting is what fuels me to keep pushing 
        and move on to the next challenge. However, I also am a common sense based person and am not 
        too proud to admit when I am out of my league and need to go to someone and ask for some direction.</p>

        <p>
        I have a laid back personality and am normally the one to crack a joke when everyone is under pressure
         and feeling stressed, it lightens the mood a little and helps get everyone back on track while still 
         remaining professional. I love people and their uniqueness and can normally find common ground with 
         everyone I encounter. Talking to people and having intellectually stimulating conversations that make 
         you walk away thinking or considering another point of view is very appealing to me.</p>

         <p>
         In conclusion, I am eager to jump in and work for your company and be productive, bring a positive 
         attitude to the projects, and a creative approach to solving complex issues. While I am still 
         considered a junior developer in terms of hours I have adequate education, a desire to learn something 
         new every day, and the people skills to connect with the other members of the team.</p>

      </div>

    </div>
  );
}
