import React from 'react'

function Illustration(props) {

    const projetNumber = props.projetNumber

  return (
    <div className="imgContainer">
        {projetNumber == 0 && <img src={`src/assets/illustrations/projet${parseInt(projetNumber) + 1}.gif`} alt={`Projet ${parseInt(projetNumber)+ 1}`} />}
        {projetNumber != 0 && <img src={`src/assets/illustrations/projet${parseInt(projetNumber) + 1}.png`} alt={`Projet ${parseInt(projetNumber)+ 1}`} />}
        
    </div>
  )
}

export default Illustration