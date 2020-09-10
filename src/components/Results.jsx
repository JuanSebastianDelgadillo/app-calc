import React from 'react'

const Result = ( {value }) => {

    console.log('Renderizacion de resul', value);
    return (
        <div className="result">
            {value}
        </div>
    )
}

//exportacion
export default Result