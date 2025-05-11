import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faLock,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

function SignUp(){
    const [name, setName] = useState()
    const [pass, setPassword] = useState()
    const [email, setEmail] = useState()
   
    const navigate = useNavigate()   
    const onRegisterElement = event => {
        event.preventDefault()
        axios.post('https://creditseabackend-jjwi.onrender.com/signup', {name, email, pass})
        .then(result => {console.log(result)
             navigate('/login')})
        .catch(err => console.log(err))
    }

    return(
        <div className='Sign_Background'>
            <div className='Sign_form'>
                <div className='Sign_form_1'>
                    <h1 className='Sign_head'>
                        <span className='Span_head'>𝓡</span>
                        <span className='Span_head'>𝓮</span>
                        <span className='Span_head'>𝓰</span>
                        <span className='Span_head'>𝓲</span>
                        <span className='Span_head'>𝓼</span>
                        <span className='Span_head'>𝓽</span>
                        <span className='Span_head'>𝓮</span>
                        <span className='Span_head'>𝓻</span>
                    </h1>
                    <form className='form_Sign_container' onSubmit={onRegisterElement}>
                        <div className='Username_Sign_div'>
                        <input type='email' value={email} onChange={e => (setEmail(e.target.value))} placeholder='Email' className='forms_sign_input'/>
                        <FontAwesomeIcon icon={faEnvelope} bounce style={{color: "#ffffff",}} />
                        </div>
                        <div className='Username_Sign_div'>
                        <input type='text' value={name} onChange={e => (setName(e.target.value))} placeholder='𝚄𝚜𝚎𝚛𝚗𝚊𝚖𝚎' className='forms_sign_input'/>
                        <FontAwesomeIcon icon={faUser} beat style={{color: "#ffffff",}}/>
                        </div>
                        <div className='Password_div_sign'>
                        <input type='password' value={pass} onChange={e => (setPassword(e.target.value))} placeholder='𝙿𝚊𝚜𝚜𝚠𝚘𝚛𝚍' className='forms_sign_input'/>
                        <FontAwesomeIcon icon={faLock} shake style={{color: "#ffffff",}} />
                        </div>
                        <button type='submit' className='Login_button'>Register</button>
                        <p className='RegistereHead'>Do you have an account? <span className='RegisterSpan'><Link to='/Login' className='LinkRegister'>Login</Link></span></p>
                    </form>
                </div>
            </div>
            <div className='Register_page'></div>
        </div>
    )
}

export default SignUp