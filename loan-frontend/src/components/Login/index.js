import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
function Login(){
    const [email, setEmail] = useState()
    const [pass, setPassword] = useState()
    const [error, setErrorMsg] = useState()
    const navigate = useNavigate()   
    const onLoginElement = async(event) => {
        event.preventDefault()
        axios.post('https://creditseabackend-jjwi.onrender.com/login', {email, pass})
        .then(result => {console.log(result)
            if (result.data === 'success'){
                navigate('/')   
            }
            else{
                setErrorMsg(result.data)
            }
             })
        .catch(err => console.log(err))
    }
    return(
        <div className='Login_Background'>
            <div className='Login_page'></div>
            <div className='Login_form'>
                <div className='Login_form_1'>
                    <h1 className='Login_head'>
                        <span className='Span_head'>𝓛</span>
                        <span className='Span_head'>𝓸</span>
                        <span className='Span_head'>𝓰</span>
                        <span className='Span_head'>𝓲</span>
                        <span className='Span_head'>𝓷</span>
                    </h1>
                    <form className='form_container' onSubmit={onLoginElement}>
                        <div className='Username_div'>
                        <input type='email' value={email} onChange={e => (setEmail(e.target.value))} placeholder='Email' className='form_inputs'/>
                        <FontAwesomeIcon icon={faUser} beat style={{color: "#ffffff",}}/>
                        </div>
                        <div className='Password_div'>
                        <input type='password' value={pass} onChange={e => (setPassword(e.target.value))} placeholder='𝙿𝚊𝚜𝚜𝚠𝚘𝚛𝚍' className='form_inputs'/>
                        <FontAwesomeIcon icon={faLock} shake style={{color: "#ffffff",}} />
                        </div>
                        <button type='submit' className='Login_button'>𝙻𝚘𝚐𝚒𝚗</button>
                        <p className='RegistereHead'>Don't have an account? <span className='RegisterSpan'><Link to='/signUp' className='LinkRegister'>Register</Link></span></p>
                        <p style={{color:'red'}}>{error}</p>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Login