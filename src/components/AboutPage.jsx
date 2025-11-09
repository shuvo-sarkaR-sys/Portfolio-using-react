import React from "react";
import p1 from '../assets/2148859448.jpg'

export default function AboutPage() {
  return (
    <section id="about" className="bg-gray-100 text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg">
            <img
              src={p1}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-4xl text-gray-600 font-semibold mb-3">Hi, I'm Smith</h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
              I’m a passionate <span className="font-medium text-gray-900"> Frontend Developer </span> 
               with a strong focus on creating beautiful, responsive, and user-friendly web applications.
              I specialize in building modern interfaces using technologies like 
              <span className="font-medium"> React.js, Tailwind CSS, and JavaScript</span>.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              I love transforming ideas into reality through code. 
              When I’m not coding, I’m learning new technologies, improving my skills, 
              and exploring ways to make websites faster and more accessible.
            </p>

            <p className="text-gray-600 leading-relaxed">
              My goal is to grow as a full-stack developer, contribute to real-world projects, 
              and help businesses achieve success with clean, scalable web solutions.
            </p>

            {/* Skills */}
            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {[
                  "HTML5", "CSS3", "JavaScript", "React.js",
                  "Tailwind CSS", "Bootstrap", "Node.js", "Git/GitHub",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-12 text-center text-gray-600 italic">
          “Code is like humor. When you have to explain it, it’s bad.”
        </div>
      </div>
    </section>
  );
}
