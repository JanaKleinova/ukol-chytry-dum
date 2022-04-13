import React from 'react';
import Light from '../Light';
import './style.css';




const Lights = ({lights}) => {

    return (
        <div className="lights">

            {lights.lights.map(item => 

                <Light
                    key={item.name}
                    name={item.name}
                    state={item.state}
                
                />
                )}
            
            


        </div>
      
    )
    
};


export default Lights;