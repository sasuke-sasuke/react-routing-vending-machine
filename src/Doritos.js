import {useState} from 'react';
import {Link} from 'react-router-dom';

const Doritos = () => {
    const [count, setCount] = useState(0);

    const isNegative = () => {
        return count < 0;
    }

    return (
        <div>
            <h1>Doritos</h1>
            {isNegative() ? <h3>You were BANNED for trying to eat negative Doritos.... You monster!</h3> 
             : <div>
                    <h3>Doritos Bags Bought</h3>
                    <p>{count}</p>
                    <button onClick={() => setCount(count - 1)}>-</button>
                    <button onClick={() => setCount(count + 1)}>+</button>
                </div>}
                <Link to="/">Go Back</Link>
        </div>
    )

}

export default Doritos;