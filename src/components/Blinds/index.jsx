import React, {useState} from 'react';
import './style.css';


const Blinds = ({state}) => {


	const [isOpen, setIsOpen] = useState(state);

	const handleClickOpen = () => {

		if (isOpen === 'open') {
			setIsOpen('closed')
		}else {setIsOpen('open')}
	 }

	 const handleClickClosed = () => {

		if (isOpen === 'closed') {
			setIsOpen('open')
		}else {setIsOpen('closed')}
	 }


  
    return (

		<div className="blinds">
			<div className="blinds__icon">
				<img src={`assets/blinds-${isOpen}.svg`}/>
			</div>
			<div className="blinds__name">
				Žaluzie
			</div>
			<div className="blinds__controls">
				<button className={isOpen === 'open' ? "button button--active" : "button"} onClick={handleClickOpen}>Otevřeno</button>
				<button className={isOpen === 'closed' ? "button button--active" : "button"} onClick={handleClickClosed}>Zavřeno</button>
			</div>
		</div>
    )};





export default Blinds;