import React from 'react';
import illuMain1 from "../assets/illustrations/projet1.gif";
import illuMain2 from "../assets/illustrations/projet2.png";
import illuMain3 from "../assets/illustrations/projet3.png";

function Illustration(props) {
  const projectNumber = props.projectNumber;
  console.log(projectNumber)
  console.log(typeof(projectNumber))

  return (
    <div className="imgContainer">
      {(() => {
        switch (projectNumber) {
          case "0":
            return <img src={illuMain1} alt={`Projet ${parseInt(projectNumber) + 1}`} />;
          case "1":
            return <img src={illuMain2} alt={`Projet ${parseInt(projectNumber) + 1}`} />;
          case "2":
            return <img src={illuMain3} alt={`Projet ${parseInt(projectNumber) + 1}`} />;
          default:
            return null;
        }
      })()}
    </div>
  );
}

export default Illustration;
