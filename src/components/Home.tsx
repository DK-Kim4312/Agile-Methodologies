import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Assuming you have a CSS file for the Home component

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Agile Development Methodologies</h1>
      <p>Explore the core principles and practices of Agile Development.</p>
      
      {/* Navigation Link to AgilePrinciples Page */}
      <Link to="/agile-principles" className="navigate-button">
        Learn about Agile Principles
      </Link>
    </div>
  );
}

export default Home;
