import React from 'react';
import './AgilePrinciples.css'; // Importing the CSS file for styling
import { Link } from 'react-router-dom';

const AgilePrinciples: React.FC = () => {
  return (
    <div className="agile-principles">
      <h2>Agile Principles</h2>
      <p>The Agile Manifesto is based on twelve fundamental principles:</p>
      <ol>
        <li>Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.</li>
        <li>Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.</li>
        <li>Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.</li>
        <li>Business people and developers must work together daily throughout the project.</li>
        <li>Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.</li>
        <li>The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.</li>
        <li>Working software is the primary measure of progress.</li>
        <li>Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.</li>
        <li>Continuous attention to technical excellence and good design enhances agility.</li>
        <li>Simplicity—the art of maximizing the amount of work not done—is essential.</li>
        <li>The best architectures, requirements, and designs emerge from self-organizing teams.</li>
        <li>At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.</li>
      </ol>
      {/* Navigation Link to AgilePrinciples Page */}
      <Link to="/" className="navigate-button">
        Go back Home
      </Link>
    </div>




  );
}

export default AgilePrinciples;
