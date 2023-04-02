import { Link } from 'react-router-dom'
import './VendingMachine.css'

const VendingMachine = () => {
    return (
        <div className='VendingMachine'>
            <div className='VendingMachine-header'>
                <h2>Welcome to The Magic Vending Machine! What's your snack?</h2>
            </div>
            
            <nav className='VendingMachine-nav'>
                <ul>
                <li>
                    <Link exact='true' to="/snickers" >
                    Snickers
                    </Link>
                </li>
                <li>
                    <Link exact='true' to="/doritos" >
                    Doritos
                    </ Link>
                </li>
                <li>
                    <Link exact='true' to="/mcdouble" >
                    McDouble
                    </Link>
                </li>
                </ul>
            </nav>
        </div>
    )
}

export default VendingMachine;