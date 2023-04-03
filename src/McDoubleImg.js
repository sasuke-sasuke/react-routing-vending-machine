import {useState} from 'react';
import mcdouble from './mcdouble.png';
import './McDoubleImg.css';

const McDoubleImg = ({styles}) => {
    const [mcdoubleImg, setmcdoubleImg] = useState(mcdouble);


    return (
        <>
            <img  className='McDoubleImg' src={mcdoubleImg} alt="" style={styles} />
        </>
    )
}

export default McDoubleImg;