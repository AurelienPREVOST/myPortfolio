import React from 'react';

function Techno(props) {
  const { technos } = props;
  const gitlink = props.gitlink;
  console.log(gitlink);

  return (
    <div className="technos">
      <h3 style={{paddingBottom: '2rem'}}>Technos et outils:</h3>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {technos.map((techno, index) => (
          <span
            key={index}
            style={{
              display: 'inline-block',
              padding: '8px',
              borderRadius: "5px",
              boxShadow: '-2px 5px 5px grey', 
              backgroundColor: 'crimson',
              color: 'white',
            }}
          >
            {techno}
          </span>
        ))}
      </div>
      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        {gitlink && <a href={gitlink} target="_blank">Voir le code</a>}
      </div>
    </div>
  );
}

export default Techno;
