//Importacion
/* eslint no-eval:0 */
import React, {useState} from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
import Result from './components/Results'
import Count from './components/Count'
import './css/App.css'

// import ReactDOM from 'react-dom'

//Generacion de la funcion del componente
const App = () => {
    //Array Destructuring
    const [texto, setTexto] = useState('');

    const items = words(texto, /[^-^+^*^/]+/g)

    //Lo que ejecuta la funcion
    console.log("Renderiacion de App", items);
const value = items.length > 0 ? items[items.length-1] : '0';

    return (
    <main className='react-calculator'> 
        <Result value={value.toString()} />
      <Numbers 
            onClickNumber = {(number) => {
                console.log('Bie', number)
                
                setTexto(`${texto}${number}`);
        }}/>
       <Functions 
            onContentClear = {() => {
                setTexto('');
                console.log('content:')
            }}
            onDelete = {() => {
                if(texto.length>0){
                    const newTexto = texto.substring(0, texto.length-1)
                    setTexto(`${newTexto}`)
                    console.log('delete: ')
                }
            }}
       />
       <MathOperations 
        onClickOperation =   {operation => {
            setTexto(`${texto}${operation}`)
            console.log('Operacion:', operation)
        }}
        onClickEqual     =   {equal => {
            setTexto(eval(texto).toString())
            console.log('Equals: ', equal)
        }}
       />
       <Count pro="1"/>
    </main>)

}

//exportacion
export default App