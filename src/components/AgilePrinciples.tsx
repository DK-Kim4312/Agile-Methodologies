import React from 'react';
import './AgilePrinciples.css'; // Importing the CSS file for styling
import { Link } from 'react-router-dom';
import AgilePrinciplesText from './AgilePrinciplesText';

function FadeInSection(props: any) { // modified from https://dev.to/selbekk/how-to-fade-in-content-as-it-scrolls-into-view-10j4
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
const AgilePrinciples: React.FC = () => {
  return (
    <div className="agile-principles">
      <h2>Agile Principles</h2>
      <p>The Agile Manifesto is based on twelve fundamental principles:</p>
      {AgilePrinciplesText.map(text => (
        <FadeInSection key={text}>
          <div className="box" >
            <span>{text}</span>
          </div>
        </FadeInSection>
      ))}
      {/* Navigation Link to AgilePrinciples Page */}
      <Link to="/" className="navigate-button">
        Go back Home
      </Link>
    </div>




  );
}

export default AgilePrinciples;
