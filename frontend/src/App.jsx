
import './App.css';
import Register from './Register';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Success from './Success';
import ForgetPassword from './ForgetPassword'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/success' element={<Success/>}></Route>
      <Route path='/forgetpassword' element={<ForgetPassword/>}></Route>


    </Routes>

    </BrowserRouter>
  );
}

export default App;
