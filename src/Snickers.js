import {useState} from 'react';
import {Link} from 'react-router-dom';
import SnickersImg from './SnickersImg';
import './Snickers.css';
import {v4 as uuid} from 'uuid';

const Snickers = () => {
    const [snickers, setSnickers] = useState(0);
    const [imgPosition, setImgPosition] = useState([]);
    
    const handleClick = (e) => { 
        e.preventDefault();
        setSnickers(snickers + 1);  

        /** Takes care of the logic for generating snickers in random
         *  positiong and saves to state
         */
        const xPos = Math.floor(Math.random() * window.innerWidth);
        const yPos = Math.floor(Math.random() * window.innerHeight);

        // const xPos = Math.floor(Math.random() * 100);
        // const yPos = Math.floor(Math.random() * 100);
        setImgPosition( [...imgPosition, { top: `${yPos}px`, left: `${xPos}px`, id: uuid() }] ); 
    }


    return (
        <div className='Snickers'>

            <section className='Snickers-section'>
                <h2 className='Snickers-heading'>Your Not You When Your Hungry</h2>
                <p className='Snickers-body'>Eaten: {snickers}</p>
                <div className='Snickers-buttons'>
                    <button onClick={handleClick}>Grab {!snickers ? 'a' : 'another'} Snickers</button>
                    <Link className='Snickers-back-btn' to="/">Go Back</Link>
                </div>
                
            </section>
            <div className='Snickers-img-container'>
            {imgPosition.map(({top, left, id}) => (
                //<SnickersImg styles={{ transform: `translate(${top}, ${left})`}} />
                <SnickersImg key={id} styles={{position: `absolute`, top: `${top}`, left: `${left}`}} />
            ))}
            </div>
        </div>
    )

}

export default Snickers;