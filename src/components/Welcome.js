import React from 'react';
import './Welcome.css';

function Welcome() {
  return (
    <div className="welcome-container">
      <header className="welcome-hero">
        <h1>Welcome to ICEU</h1>
        <p>Inspiring Change, Empowering Unity</p>
      </header>

      <section className="welcome-section fade-in">
        <h2>Our History</h2>
        <p>
          ICEU began as a small collective of passionate individuals striving for unity and purpose.
          Over the years, it has grown into a thriving movement that touches lives across the globe.
        </p>
      </section>

      <section className="welcome-section slide-up">
        <h2>Our Aims</h2>
        <p>
          To cultivate an environment of inspiration, collaboration, and spiritual growth.
        </p>
      </section>

      <section className="welcome-section fade-in">
        <h2>Our Mission</h2>
        <p>
          Empowering communities through education, compassion, and unity in purpose.
        </p>
      </section>

      <section className="welcome-section slide-up">
        <h2>Our Vision</h2>
        <p>
          To become a global beacon of hope and a force of transformation in people’s lives.
        </p>
      </section>
    </div>
  );
}

export default Welcome;
