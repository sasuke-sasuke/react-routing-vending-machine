import {useState} from 'react';
import {Link} from'react-router-dom';

const McDouble = () => {
    const [count, setCount] = useState(0);

    const isEnough = () => {
        return count === 10;
    }

    return (
        <div>
            <h1>McDouble</h1>

           {isEnough()? <h3>Congratulations! You've gained 8500 calories!</h3> 
           :    <div>
                    <p>Count: {count}</p>
                    <button onClick={() => setCount(count + 1)}>Super Size Me!</button>
                </div>}

            <Link to="/">Go Back</Link>

        </div>
    )

}

export default McDouble;