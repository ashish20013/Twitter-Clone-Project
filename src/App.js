import SignUp from './components/singUpPage/SignUp';
import './App.css';
import SignIn from './components/singInPage/signin';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route  index path="/" element={<SignIn />} />
        <Route  path="/singUp" element={<SignUp />}/>
      </Routes>
  
      
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
