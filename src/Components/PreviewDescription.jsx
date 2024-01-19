import React, { useEffect } from 'react';
import { useRef } from 'react';

function PreviewDescription(props) {
  const description = props.description;
  const projetNumber = props.projetNumber;
  const inclus = props.inclus || [];
  console.log("projetNumber==>", projetNumber)
  console.log(typeof(projetNumber)) //Ne serait pas arrivé avec typescript

  const illustrationRefs = useRef([]);

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
        <h3 style={{margin: "1rem"}}>Inclus:</h3>
        <ul>
          {inclus.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="additionalIllustrationsContainer">
      <div className="additionalIllustration">
        <img ref={(el) => (illustrationRefs.current[0] = el)} src={`src/assets/illustrations/projet${parseInt(projetNumber) + 1}a.png`} alt={`Projet ${parseInt(projetNumber) + 1}a`} />
      </div>
      <div className="additionalIllustration">
        {/* Attention projetNumber type string */}
        {projetNumber == 2 && <img ref={(el) => (illustrationRefs.current[1] = el)} src={`src/assets/illustrations/projet${parseInt(projetNumber) + 1}b.gif`} alt={`Projet ${parseInt(projetNumber) + 1}b`} />}
        {projetNumber != 2 && <img ref={(el) => (illustrationRefs.current[1] = el)} src={`src/assets/illustrations/projet${parseInt(projetNumber) + 1}b.png`} alt={`Projet ${parseInt(projetNumber) + 1}b`} />}
      </div>
      <div className="additionalIllustration">
        <img ref={(el) => (illustrationRefs.current[2] = el)} src={`src/assets/illustrations/projet${parseInt(projetNumber) + 1}c.png`} alt={`Projet ${parseInt(projetNumber) + 1}c`} />
      </div>
    </div>

    </>
  );
}

export default PreviewDescription;

