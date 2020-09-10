//Importacion
import React from 'react'
import Result from './components/Results'
import './App.css'

// import ReactDOM from 'react-dom'

//Generacion de la funcion del componente
const App = () => {
    //Lo que ejecuta la funcion
    console.log("Renderiacion de App");
    return (
    <main className='react-calculator'> 
       <Result value = {'0'}/>
       {/* <Result value={'0'} text="" prop3={false}/> */}
       <div className="numbers">
           <button>1</button>
           <button>2</button>
           <button>3</button>
           <button>4</button>
           <button>5</button>
           <button>6</button>
           <button>7</button>
           <button>8</button>
           <button>9</button>
           <button>0</button>
       </div>
       <div className="functions">
           <button>clear</button>
           <button>r</button>
       </div>
       <div className="math-operations">
           <button>+</button>
           <button>-</button>
           <button>*</button>
           <button>/</button>
           <button>=</button>
       </div>
    </main>)

}

//exportacion
export default App