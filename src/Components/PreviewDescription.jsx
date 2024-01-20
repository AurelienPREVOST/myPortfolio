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
        <h3>Inclus:</h3>
        <ul>
          {inclus.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="additionalIllustrationsContainer">
      <div className="additionalIllustration">
        <img ref={(el) => (illustrationRefs.current[0] = el)} src={illustrations[0]} alt={`projet ${projectNumber}a`}/>
      </div>
      <div className="additionalIllustration">
        <img ref={(el) => (illustrationRefs.current[1] = el)} src={illustrations[1]} alt={`projet ${projectNumber}b`}/>
      </div>
      <div className="additionalIllustration">
        <img ref={(el) => (illustrationRefs.current[2] = el)} src={illustrations[2]} alt={`projet ${projectNumber}c`}/>
      </div>
    </div>

    </>
  );
}

export default PreviewDescription;

