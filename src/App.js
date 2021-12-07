import React from 'react'
import SvgComponent from './components/Flecha';


function App() {
    return (
        <>
            <div>
                <SvgComponent 
                width={40}
                transform="rotate(110 20 20)"
                ></SvgComponent>
            </div>
        </>

    );
}

export default App;
