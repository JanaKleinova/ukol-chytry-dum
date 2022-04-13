import React, {useState} from 'react';
import './style.css';

const on = ("on");
const off = ("off");


const Light = ({name, state}) => {

    const [vypinac, setVypinac] = useState(state);

    const handleClick = () => {

       if (vypinac === on) {
           setVypinac(off)
       }else {
           setVypinac(on);
       }
    }
    return (

        <div className="light" onClick={handleClick}>
            <div className="light__icon">
                <img src={`assets/light-${vypinac}.svg`} alt="" />

                {name}
            </div>
        </div>
    )
    
};


export default Light;