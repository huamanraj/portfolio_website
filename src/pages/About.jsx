// pages/About.jsx

function About() {
    return (
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl text-md-yellow mb-6">About Me</h1>
        <div className="bg-md-bg border border-md-text/20 rounded-lg p-6 mb-6">
          <p className="text-md-text mb-4">
            Hello! I'm [Your Name], a passionate full stack developer with a keen interest in building 
            innovative web applications. With [X] years of experience in the field, I've had the 
            opportunity to work on a diverse range of projects, from small business websites to 
            large-scale enterprise applications.
          </p>
          <p className="text-md-text mb-4">
            My technical toolkit includes:
          </p>
          <ul className="list-disc list-inside text-md-blue mb-4">
            <li>Frontend: React, Vue.js, JavaScript (ES6+), HTML5, CSS3</li>
            <li>Backend: Node.js, Express, Python, Django</li>
            <li>Databases: MongoDB, PostgreSQL, MySQL</li>
            <li>DevOps: Docker, AWS, CI/CD pipelines</li>
          </ul>
          <p className="text-md-text">
            When I'm not coding, you can find me [Your Hobbies/Interests]. I'm always eager to learn 
            new technologies and methodologies to stay at the forefront of web development.
          </p>
        </div>
      </div>
    );
  }
  
  export default About;