import {useState} from 'react';
import {Link} from 'react-router-dom';
import DoritosImg from './DoritosImg';
import {v4 as uuid} from 'uuid';
import './Doritos.css'

const Doritos = () => {
    const [count, setCount] = useState(0);
    const [doritos, setDoritos] = useState([]);

    /** Removes dorito from state */
    const removeDoritos = () => {
        setDoritos(doritos.filter(d => d !== doritos[count-1]));
    }

    const isNegative = () => {
        return count < 0;
    }

    /** Increments state and adds and id to doritos list */
    const onIncremet = () => {
        setCount(count + 1);
        setDoritos([...doritos, uuid()]);
    }

    /** Decrements state and removes id from doritos list */
    const onDecrement = () => {
        setCount(count - 1);
        removeDoritos();
    }

    return (
        <>
             <div className='Doritos'>
            {isNegative() ? <h3>You were BANNED for trying to eat negative Doritos.... You monster!</h3> 
             : <div className='Doritos-section'>
                    <h3 className='Doritos-heading'>Doritos Bags Bought</h3>
                    <p className='Doritos-body'>{count}</p>
                    <div className='Doritos-buttons'>
                        <button className='Doritos-increment' onClick={onDecrement}>-</button>
                        <button className='Doritos-decrement' onClick={onIncremet}>+</button>
                    </div>
                </div>}
                <Link className='Doritos-back-btn' to="/">Go Back</Link>
        </div>

        <div className='Doritos-img-container'>
            {doritos.map(d => <DoritosImg key={d} id={d} />)}
        </div>
        </>
       
    )

}

export default Doritos;