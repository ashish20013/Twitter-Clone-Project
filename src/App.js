import SignUp from './components/singUpPage/SignUp';
import './App.css';
import SignIn from './components/singInPage/signin';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route  path="singUp" element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
      {/* <SignUp /> */}
      <SignIn />
      
      
      
    </div>
  );
}

export default App;
