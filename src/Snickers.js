import {useState} from 'react';
import {Link} from 'react-router-dom';
import './Snickers.css';

const Snickers = () => {
    const [snickers, setSnickers] = useState(0);
    
    const handleClick = (e) => { 
        e.preventDefault();
        setSnickers(snickers + 1);   
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
        </div>
    )

}

export default Snickers;