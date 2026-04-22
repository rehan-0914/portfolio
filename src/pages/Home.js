import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="profile-section">
        <div className="avatar">RM</div>
        <h1>Rehan Mohiddin</h1>
        <p className="tagline">Computer Science Student</p>
      </div>

      <div className="card">
        <h2>About Me</h2>
        <p>Hi! I am Rehan Mohiddin, a first year Computer Science student at Mahindra University. I enjoy building web applications and learning new technologies.</p>
      </div>

      <div className="card">
        <h2>Research Interests</h2>
        <p>Web Development, Database Systems, Artificial Intelligence, and Software Engineering.</p>
      </div>

      <div className="card">
        <h2>Personal Details</h2>
        <table className="details-table">
          <tbody>
            <tr><td><strong>Name</strong></td><td>Rehan Mohiddin</td></tr>
            <tr><td><strong>Phone</strong></td><td>9175082830</td></tr>
            <tr><td><strong>Personal Email</strong></td><td>rehan.mb2005@gmail.com</td></tr>
            <tr><td><strong>College Email</strong></td><td>se23uari101@mahindrauniversity.edu.in</td></tr>
          </tbody>
        </table>
      </div>

      <div className="card">
        <h2>Skills</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Python</span>
          <span>Node.js</span>
          <span>PHP</span>
          <span>MySQL</span>
          <span>MongoDB</span>
          <span>SQLite</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
