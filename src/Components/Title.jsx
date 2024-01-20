import React from 'react'


function Title(props) {

    const title = props.title

    return (
        <div style={{width:'96%', margin: '0 auto', color: 'crimson'}}>
            <h2>{title}</h2>
        </div>
  )
}

export default Title