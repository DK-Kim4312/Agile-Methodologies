import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importing the updated CSS file for the Home component

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1>Welcome to Agile Development Methodologies</h1>
        <p>Discover the principles that drive effective software development.</p>
        
        {/* Navigation Link to AgilePrinciples Page */}
        <Link to="/agile-principles" className="navigate-button">
          Learn about Agile Principles
        </Link>
      </div>
    </div>
  );
}

export default Home;
