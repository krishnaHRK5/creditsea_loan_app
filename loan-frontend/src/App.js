import './App.css';
import Home from './components/Home'
import AppliedLoans from './components/AppliedLoans'
import User from './components/User'
import LoanForm from './components/LoanForm'
import Login from './components/Login'
import SignUp from './components/SignUp';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
const App = () => (
  <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/AppliedLoans' element={<AppliedLoans/>}/>
        <Route path='/User' element={<User/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>} />
        <Route path='/LoanForm' element={<LoanForm/>}/>
      </Routes>  
  </BrowserRouter>
)
export default App;