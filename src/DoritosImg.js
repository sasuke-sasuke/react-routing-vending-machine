import {useState} from 'react';
import doritos from './doritos.png';
import './DoritosImg.css';

const DoritosImg = () => {
    const [doritosImg, setDoritosImg] = useState(doritos);


    return (
        <>
            <img className='DoritosImg' src={doritosImg} alt="" />
        </>
    )
}

export default DoritosImg;