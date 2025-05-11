import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGaugeHigh, faBell,faCommentDots,faNairaSign, faCreditCard,faUser, faFileLines,faSortDown} from '@fortawesome/free-solid-svg-icons'
import {Link, useNavigate} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {useState} from 'react'
import axios from 'axios'
const LoanForm = () => {
    const [Fullname, setFullname] = useState()
    const [MoneyNeed, setMoneyNeed] = useState()
    const [LoanMonth, setLoanMonth] = useState()
    const [status, setStatus] = useState()
    const [reason, setReason] = useState()
    const [address, setAddress] = useState()
    const navigate = useNavigate()
    const onAddElement = event => {
        event.preventDefault()
        axios.post('https://creditseabackend-jjwi.onrender.com/postData', {Fullname, MoneyNeed, LoanMonth, status, reason, address})
        .then(result => {
            console.log(result)
            navigate('/AppliedLoans')
        })
        .catch(err => console.log(err))
    }

    return(
    <div className='MainContainerLoanForm'>
        <div className='HeaderContainer'>
                    <div className='HeaderContainer1'>
                        <h1 className='CreditappHead'>𝐂𝐑𝐄𝐃𝐈𝐓 𝐀𝐏𝐏</h1>
                    </div>
                    <div className='UserContainer1'>
                        <Link to='/' className='LinkElement'>
                        <li className='UserContainer2'>
                            <FontAwesomeIcon icon={faGaugeHigh} style={{color: '#064921', height:'4vh', width:'4vw' }}/>
                            <h1 className='UserTextTops'>Home</h1>
                        </li>
                        </Link>
                        <li className='UserContainer2'>
                            <FontAwesomeIcon icon={faNairaSign} style={{color: '#0A512FB2', height:'4vh', width:'4vw' }}/>
                            <h1 className='UserTextTops'>Payments</h1>
                        </li>
                        <li className='UserContainer2'>
                            <FontAwesomeIcon icon={faFileLines} style={{color: '#0A512FB2', height:'4vh', width:'4vw' }}/>
                            <h1 className='UserTextTops'>Budget</h1>
                        </li>
                        <li className='UserContainer2'>
                            <FontAwesomeIcon icon={faCreditCard} style={{color: '#0A512FB2', height:'4vh', width:'4vw' }}/>
                            <h1 className='UserTextTops'>Card</h1>
                        </li>
                    </div>
                    <div className='HeaderContainer2'>
                        <FontAwesomeIcon icon={faBell} style={{color: "#0A512FB2",}} className='FontIcon'/>
                        <FontAwesomeIcon icon={faCommentDots} style={{color: "#0A512FB2",}} className='FontIcon'/>
                        <FontAwesomeIcon icon={faUser} style={{color: "#0A512FB2",}} className='FontIcon'/>
                        <h1 className='AdminHead'>𝐔𝐬𝐞𝐫</h1>
                        <div> 
                                                        <Popup
                                                            trigger={
                                                                <FontAwesomeIcon icon={faSortDown} style={{color: "#074418",cursor:"pointer"}} className='FontIcon'/>    
                                                            }
                                                            position="bottom right"
                                                            >
                                                                <div className='popupUl'>
                                                                    <Link to='/' className='LinkElement'>
                                                                    <li className='popupli'>
                                                                        𝐀𝐝𝐦𝐢𝐧
                                                                    </li>
                                                                    </Link>
                                                                    <Link to='/AppliedLoans' className='LinkElement'>
                                                                    <li className='popupli'>
                                                                        𝐕𝐞𝐫𝐢𝐟𝐢𝐞𝐫
                                                                    </li>
                                                                    </Link>
                                                                    <Link to='/User' className='LinkElement'>
                                                                    <li className='popupli'>
                                                                        𝐔𝐬𝐞𝐫𝐋𝐨𝐚𝐧𝐬
                                                                    </li>
                                                                    </Link>
                                                                    <Link to='/Logout' className='LinkElement'>
                                                                    <li className='popupli'>
                                                                        𝐋𝐨𝐠𝐨𝐮𝐭
                                                                    </li>
                                                                    </Link>
                                                                </div>
                                                                </Popup>
                                                            </div>
                         </div>
        </div>
        <div className='MainContainerLoanForm1'>
            <form className='MainContainerLoanForm2' onSubmit={onAddElement}>
                <h1 className='ApplyLoan'>APPLY FOR A LOAN</h1>
                <div className='MainContainerLoanForm3'>
                    <div className='MainContainerLoanForm4'>
                        <label htmlFor='fullname' className='FullNameText'>Full name as it appears on bank account</label>
                        <input id='fullname' type='type' value={Fullname} onChange={e => setFullname(e.target.value)} className='LoanFormInput' placeholder='Full name as it appears on bank account'/>
                    </div>
                    <div className='MainContainerLoanForm4'>
                        <label htmlFor='MoneyNeed' className='FullNameText'>How much do you need?</label>
                        <input id='MoneyNeed' type='number' value={MoneyNeed} onChange={e => setMoneyNeed(e.target.value)} className='LoanFormInput' placeholder='How much do you need?'/>
                    </div>
                </div>
                <div className='MainContainerLoanForm3'>
                    <div className='MainContainerLoanForm4'>
                        <label htmlFor='LoanMonth' className='FullNameText'>Loan tenure (in months)</label>
                        <input id='LoanMonth' type='number' value={LoanMonth} onChange={e => setLoanMonth(e.target.value)} className='LoanFormInput' placeholder='Loan tenure (in months)'/>
                    </div>
                    <div className='MainContainerLoanForm4'>
                        <label htmlFor='status' className='FullNameText'>Employment status</label>
                        <input id='status' type='type' value={status} onChange={e => setStatus(e.target.value)} className='LoanFormInput' placeholder='Employment status'/>
                    </div>
                </div>
                <div className='MainContainerLoanForm3'>
                    <div className='MainContainerLoanForm4'>
                        <label htmlFor='reason' className='FullNameText'>Reason for loan</label>
                        <input id='reason' type='type' value={reason} onChange={e => setReason(e.target.value)} className='LoanFormInput' placeholder='Reason for loan'/>
                    </div>
                    <div className='MainContainerLoanForm4'>
                        <h1 htmlFor='address' className='FullNameText'>Employment address</h1>
                        <input id='address' type='type' value={address} onChange={e => setAddress(e.target.value)} className='LoanFormInput' placeholder='Employment address'/>
                    </div>
                </div>
                <div className='MainContainerLoanForm3'>
                    <div className='MainContainerLoanForm4'>
                        <input type='Checkbox' />
                        <h1 className='FullNameText'>I have read the important information and accept that by completing the application I will be bound by the terms </h1>
                    </div>
                    <div className='MainContainerLoanForm4'>
                        <input type='Checkbox'/>
                        <h1 className='FullNameText'>Any personal and credit information obtained may be disclosed from time to time to other lenders, credit bureaus or other credit reporting agencies.</h1>
                    </div>
                </div>
                <div className='MainChartsContainer'>
                    <h1 className='ChartText'>Chart</h1>
                    <button type='submit' className='Submit_btn'>Submit</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default LoanForm