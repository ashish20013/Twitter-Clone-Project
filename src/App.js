import SignUp from './components/singUpPage/SignUp';
import Singup from './components/singUpRegister/SingUpRegister';

import './App.css';
import SignIn from './components/singInPage/signin';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/singup" element={<Singup />} />
        </Routes>




      </div>
    </BrowserRouter>
  );
}

export default App;
