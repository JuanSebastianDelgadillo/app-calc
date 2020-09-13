import React, { useState } from 'react';
import '../css/Count.css'

function Count() {
    const [count, setCount] = useState(0);

return (
    <div>
        <p className="clikl">You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
        Click me
        </button>
    </div>
    );
}


//Exportar
export default Count
