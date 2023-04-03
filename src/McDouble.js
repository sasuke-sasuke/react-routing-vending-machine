import {useState, useRef} from 'react';
import {Link} from'react-router-dom';
import McDoubleImg from './McDoubleImg'
import './McDouble.css'

const McDouble = () => {
    const [count, setCount] = useState(0);
    const [height, setHeight] = useState(100);
    const [width, setWidth] = useState(100);

    const isEnough = () => {
        return count === 10;
    }

    const handleClick = () => {
        setCount(count + 1);
        setHeight(height + 50);
        setWidth(width + 50);
    }

    return (
       <>
         <div className='McDouble'>
           {isEnough() ? <h3 className='McDouble-heading'>Congratulations! You've gained 8500 calories!</h3> 
           :    <div>
                    <p className='McDouble-body'>Count: {count}</p>
                    <button className='McDouble-btn' onClick={handleClick}>Super Size Me!</button>
                </div>}

            <Link className='McDouble-back-btn' to="/">Go Back</Link>

        </div>
        <div className='McDouble-img-container'>
            <McDoubleImg styles={{width: `${width}px`, height: `${height}px`}} />
        </div>
        
       </>
    )

}

export default McDouble;