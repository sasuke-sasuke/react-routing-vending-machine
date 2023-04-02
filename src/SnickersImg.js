import {useState} from 'react';
import snickers from './snickers.png';
import './SnickersImg.css';

const SnickersImg = ({styles}) => {
    const [snickersImg, setSnickersImg] = useState(snickers);


    return (
        <>
            <img className='SnickersImg' src={snickersImg} alt="snickers" style={styles} />
        </>
    )
}

export default SnickersImg;