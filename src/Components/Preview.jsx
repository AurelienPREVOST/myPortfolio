import React from 'react';
import Techno from './Techno';
import PreviewDescription from './PreviewDescription';
import Title from './Title';
import Illustration from './Illustration';

function Preview(props) {
  const previewType = props.index % 2 === 0 ? "previewOdd" : "previewEven";
  const title = props.title
  const technos = props.technos
  const description = props.description
  const gitlink = props.gitlink
  const inclus = props.inclus

  return (
    <div className={`preview ${previewType}`}>
      <Title title={title} />

      {props.index % 2 === 0 ? ( // If previewType is even
        <>
          <Techno technos={technos} gitlink={gitlink}/>
          <Illustration projetNumber={props.index} />
          <PreviewDescription description={description} projetNumber={props.index} inclus={props.inclus}/>
        </>
      ) : ( // If previewType is odd
        <>
          <Illustration projetNumber={props.index} />
          <Techno technos={technos} gitlink={gitlink}/>
          <PreviewDescription description={description} projetNumber={props.index} inclus={props.inclus}/>
        </>
      )}
    </div>
  );
}

export default Preview;