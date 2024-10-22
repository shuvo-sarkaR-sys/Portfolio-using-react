import React, { useEffect, useState, useRef } from 'react';

const skills = [
  { name: 'HTML', progress: 95, color: 'bg-orange-400' },
  { name: 'CSS', progress: 85, color: 'bg-green-500' },
  { name: 'JavaScript', progress: 85, color: 'bg-yellow-300' },
  { name: 'React', progress: 90, color: 'bg-blue-600' },
  { name: 'TailwindCss', progress: 90, color: 'bg-sky-400' }
];

const Skill = () => {
  const [loaded, setLoaded] = useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect(); // Stop observing after animation starts
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (observer && skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={skillRef}
      className='md:h-screen mb-5 flex flex-col justify-center items-center'
    >
      <h1 className="text-3xl font-bold mb-6">My <span className='text-orange-400'>Skills</span></h1>
      <div className="w-2/4">
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="text-base font-medium">{skill.name}</div>
            <div className="w-full bg-gray-200 rounded-full h-3 md:h-4">
              <div
                className={`${skill.color} h-3 md:h-4 rounded-full transition-all duration-1000 ease-out`}
                style={{ width: loaded ? `${skill.progress}%` : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
