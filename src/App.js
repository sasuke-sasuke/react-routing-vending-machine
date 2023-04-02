import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom'
import Snickers from './Snickers';
import Doritos from './Doritos';
import McDouble from './McDouble';
import VendingMachine from './VendingMachine';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <div>
                <Routes>
                    <Route exact='true' path="/" element={<VendingMachine />} />
                    <Route path="/snickers" element={<Snickers />} />
                    <Route path="/doritos" element={<Doritos />} />
                    <Route path="/mcdouble" element={<McDouble />} />
                </Routes>

            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
