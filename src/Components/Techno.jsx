import React from 'react';

function Techno(props) {
  const { technos } = props;
  const gitlink = props.gitlink;
  console.log(gitlink);

  return (
    <div className="technos">
      <h3>Technos et outils:</h3>
      <div>
        {technos.map((techno, index) => (
          <span
            key={index}
            className="technoItem"
          >
            {techno}
          </span>
        ))}
      </div>
      <div className="codeLink">
        {gitlink && <a href={gitlink} target="_blank">Voir le code</a>}
      </div>
    </div>
  );
}

export default Techno;
