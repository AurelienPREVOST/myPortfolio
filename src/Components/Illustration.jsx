import React from 'react';
import illuMain1 from "../assets/illustrations/projet1.gif";
import illuMain2 from "../assets/illustrations/projet2.png";
import illuMain3 from "../assets/illustrations/projet3.png";
import illuMain4 from "../assets/illustrations/projet4.jpg";
import illuMain5 from "../assets/illustrations/projet5.png";
import illuMain6 from "../assets/illustrations/projet6.jpg";
import illuMain7 from "../assets/illustrations/projet7.gif";
// import illuMain8 from "../assets/illustrations/projet8.png";
// import illuMain9 from "../assets/illustrations/projet9.jpg";
import illuMain10 from "../assets/illustrations/projet10.jpg";
// import illuMain11 from "../assets/illustrations/projet11.png";
// import illuMain12 from "../assets/illustrations/projet12.png";
// import illuMain13 from "../assets/illustrations/projet13.png";
import illuMain14 from "../assets/illustrations/projet14.jpg";
import illuMain15 from "../assets/illustrations/projet15.png";
import illuMain16 from "../assets/illustrations/projet16.png";
import illuMain17 from "../assets/illustrations/projet17.png";


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
          case "3":
            return <img src={illuMain4} alt={`Projet ${parseInt(projectNumber) + 1}`} />;
          case "4":
            return <img src={illuMain5} alt={`Projet ${parseInt(projectNumber) + 1}`} />;
          case "5":
            return <img src={illuMain6} alt={`Projet ${parseInt(projectNumber) + 1}`} />;
          case "6":
            return <img src={illuMain7} alt={`Projet ${parseInt(projectNumber) + 1}`} />;
          // case "7":
          //   return <img src={illuMain8} alt={`Projet ${parseInt(projectNumber) + 1}`} />;
          // case "8":
            // return <img src={illuMain9} alt={`Projet ${parseInt(projectNumber) + 1}`} />;
          case "9":
            return <img src={illuMain10} alt={`Projet ${parseInt(projectNumber) + 1}`} />;
          // case "10":
          //   return <img src={illuMain11} alt={`Projet ${parseInt(projectNumber) + 1}`} />;
          // case "11":
          //   return <img src={illuMain12} alt={`Projet ${parseInt(projectNumber) + 1}`} />;
          // case "12":
          //   return <img src={illuMain13} alt={`Projet ${parseInt(projectNumber) + 1}`} />;
          case "13":
            return <img src={illuMain14} alt={`Projet ${parseInt(projectNumber) + 1}`} />;
          case "14":
            return <img src={illuMain15} alt={`Projet ${parseInt(projectNumber) + 1}`} />;
          case "15":
            return <img src={illuMain16} alt={`Projet ${parseInt(projectNumber) + 1}`} />;
          case "16":
            return <img src={illuMain17} alt={`Projet ${parseInt(projectNumber) + 1}`} />;
          default:
            return null;
        }
      })()}
    </div>
  );
}

export default Illustration;
