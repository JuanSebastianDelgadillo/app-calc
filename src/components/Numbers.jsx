//impory React
import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


//DRY: Don't repeat
const numeros = [1,2,3,4,5,6,7,8,9,0]

const renderButtons = onClickNumber =>{
    const loopButton = num =>(
       <Button key={num.toString()} text={num.toString()} clickHandler={onClickNumber}></Button>
       )
    return numeros.map(loopButton);
}

const Numbers = ({onClickNumber})=>(
    <section className='numbers'>
       {
           renderButtons(onClickNumber)
       }
    </section>
)

Numbers.propTypes = {
    onClickNumber : PropTypes.func.isRequired
}


//Exportar
export default Numbers