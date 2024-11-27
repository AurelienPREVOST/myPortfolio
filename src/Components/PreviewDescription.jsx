import React, { useEffect } from 'react';
import { useRef } from 'react';
import illu1a from "../assets/illustrations/projet1a.png";
import illu1b from "../assets/illustrations/projet1b.png";
import illu1c from "../assets/illustrations/projet1c.png";

import illu2a from "../assets/illustrations/projet2a.png";
import illu2b from "../assets/illustrations/projet2b.png";
import illu2c from "../assets/illustrations/projet2c.png";

import illu3a from "../assets/illustrations/projet3a.png";
import illu3b from "../assets/illustrations/projet3b.gif";
import illu3c from "../assets/illustrations/projet3c.png";

import illu4a from "../assets/illustrations/projet4a.jpg";
import illu4b from "../assets/illustrations/projet4b.jpg";
import illu4c from "../assets/illustrations/projet4c.jpg";

import illu5a from "../assets/illustrations/forbidden.jpg";
// import illu5b from "../assets/illustrations/forbidden.jpg";
// import illu5c from "../assets/illustrations/forbidden.jpg";

import illu6a from "../assets/illustrations/forbidden.jpg";
// import illu6b from "../assets/illustrations/forbidden.jpg";
// import illu6c from "../assets/illustrations/forbidden.jpg";

// import illu7a from "../assets/illustrations/forbidden.jpg";
// import illu7b from "../assets/illustrations/forbidden.jpg";
// import illu7c from "../assets/illustrations/forbidden.jpg";

// import illu8a from "../assets/illustrations/forbidden.jpg";
// import illu8b from "../assets/illustrations/forbidden.jpg";
// import illu8c from "../assets/illustrations/forbidden.jpg";

// import illu9a from "../assets/illustrations/forbidden.jpg";
// import illu9b from "../assets/illustrations/forbidden.jpg";
// import illu9c from "../assets/illustrations/forbidden.jpg";

import illu10a from "../assets/illustrations/projet10a.jpg";
import illu10b from "../assets/illustrations/projet10b.jpg";
import illu10c from "../assets/illustrations/projet10c.jpg";

// import illu11a from "../assets/illustrations/forbidden.jpg";
// import illu11b from "../assets/illustrations/forbidden.jpg";
// import illu11c from "../assets/illustrations/forbidden.jpg";

// import illu12a from "../assets/illustrations/forbidden.jpg";
// import illu12b from "../assets/illustrations/forbidden.jpg";
// import illu12c from "../assets/illustrations/forbidden.jpg";

// import illu13a from "../assets/illustrations/forbidden.jpg";
// import illu13b from "../assets/illustrations/forbidden.jpg";
// import illu13c from "../assets/illustrations/forbidden.jpg";

// import illu14a from "../assets/illustrations/forbidden.jpg";
// import illu14b from "../assets/illustrations/forbidden.jpg";
// import illu14c from "../assets/illustrations/forbidden.jpg";

// import illu15a from "../assets/illustrations/forbidden.jpg";
import illu15b from "../assets/illustrations/projet15b.png";
// import illu15c from "../assets/illustrations/forbidden.jpg";

// import illu16a from "../assets/illustrations/forbidden.jpg";
import illu16a from "../assets/illustrations/projet16a.jpg";
import illu16b from "../assets/illustrations/projet16b.jpg";
import illu16c from "../assets/illustrations/projet16c.jpg";
// import illu16c from "../assets/illustrations/forbidden.jpg";

// import illu17a from "../assets/illustrations/forbidden.jpg";
// import illu17b from "../assets/illustrations/forbidden.jpg";
// import illu17c from "../assets/illustrations/forbidden.jpg";


function PreviewDescription(props) {
  const description = props.description;
  const projectNumber = props.projectNumber;  // PEUT PRENDRE LA VALEUR 1 2 ou 3
  const inclus = props.inclus || [];
  const illustrationRefs = useRef([]);
  let illustrations = [];

  switch (projectNumber) {
    case "0":
      illustrations = [illu1a, illu1b, illu1c];
      break;
    case "1":
      illustrations = [illu2a, illu2b, illu2c];
      break;
    case "2":
      illustrations = [illu3a, illu3b, illu3c];
      break;
    case "3":
      illustrations = [illu4a, illu4b, illu4c];
      break;
    case "4":
      illustrations = [illu5a];
      break;
    case "5":
      illustrations = [illu6a];
      break;
    case "6":
      illustrations = [];
      break;
    case "7":
      // illustrations = [illu8a, illu8b, illu8c];
      break;
    case "8":
      // illustrations = [illu9a, illu9b, illu9c];
      break;
    case "9":
      illustrations = [illu10a, illu10b, illu10c];
      break;
    case "10":
      // illustrations = [illu11a, illu11b, illu11c];
      break;
    case "11":
      // illustrations = [illu12a, illu12b, illu12c];
      break;
    case "12":
      // illustrations = [illu13a, illu13b, illu13c];
      break;
    case "13":
      // illustrations = [illu14a, illu14b, illu14c];
      break;
    case "14":
      illustrations = [illu15b];
      break;
    case "15":
      illustrations = [illu16a, illu16b, illu16c];
      break;
    // case "16":
      // illustrations = [illu17a, illu17b, illu17c];
      // break;
    default:
      break;
  }

  useEffect(() => {
    illustrationRefs.current.forEach((ref, index) => {
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            ref.classList.add("active");
          }, 500 * index)
          observer.unobserve(ref);
        }
      });

      observer.observe(ref);

      return () => {
        observer.unobserve(ref);
      };
    });
  }, [illustrationRefs]);

  return (
    <>
      <p className="description">{description}</p>
      <div className="inclus-container">
        {inclus.length > 0 && <h3>Inclus:</h3>} {/* Afficher h3 seulement si input.length > 0 */}
        <ul>
          {inclus.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

  
        <div className="additionalIllustrationsContainer">
        {illustrations[0] && (
          <div className="additionalIllustration">
            <img ref={(el) => (illustrationRefs.current[0] = el)} src={illustrations[0]} alt={`projet ${projectNumber}a`} />
          </div>
        )}
        {illustrations[1] && (
          <div className="additionalIllustration">
            <img ref={(el) => (illustrationRefs.current[1] = el)} src={illustrations[1]} alt={`projet ${projectNumber}b`} />
          </div>
        )}
        {illustrations[2] && (
          <div className="additionalIllustration">
            <img ref={(el) => (illustrationRefs.current[2] = el)} src={illustrations[2]} alt={`projet ${projectNumber}c`} />
          </div>
        )}
      </div>
    </>
  );
  
}

export default PreviewDescription;

