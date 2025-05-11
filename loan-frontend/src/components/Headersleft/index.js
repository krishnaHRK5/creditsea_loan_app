import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSignature,faSquareParking,faGears,faRightFromBracket,faBriefcase,faCalendarCheck,faChartColumn,faShareFromSquare,faBuildingColumns,faPiggyBank,faUserGear,faFileLines,faScaleBalanced, faCreditCard,faCircleUser,faGaugeHigh, faUserMinus, faMoneyBill1, faUserPlus} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const Headersleft = () => {
    return(
        <div className='HeaderContainer3'>
            <div className='HeaderContainer4'>
            <FontAwesomeIcon icon={faCircleUser} style={{color: '#ADCF1A', height: '5vh', width: '5vw'}}/>
                <h1 className='UserHead'>Surya</h1>
            </div>
            
            <div className='Header_ul'>
                <Link to='/' className='LinkElement'>
                <li className='Header_li'>
                    <FontAwesomeIcon icon={faGaugeHigh} style={{color: '#fff' }} className='LiIcons'/>
                    <h1 className='LiText'>Dashboard</h1>
                </li>
                </Link>
                <li className='Header_li'>
                    <FontAwesomeIcon icon={faUserMinus} style={{color: '#fff' }} className='LiIcons'/>
                    <h1 className='LiText'>Borrowers</h1>
                </li>
                <Link to='/AppliedLoans' className='LinkElement'>
                <li className='Header_li'>
                    <FontAwesomeIcon icon={faMoneyBill1} style={{color: '#fff' }} className='LiIcons'/>
                    <h1 className='LiText'>Loans</h1>
                </li>
                </Link>
                <li className='Header_li'>
                    <FontAwesomeIcon icon={faUserPlus} style={{color: '#fff' }} className='LiIcons'/>
                    <h1 className='LiText'>Repayments</h1>
                </li>
                <li className='Header_li'>
                    <FontAwesomeIcon icon={faScaleBalanced} style={{color: '#fff' }} className='LiIcons'/>
                    <h1 className='LiText'>Loan Parameters</h1>
                </li>
                <li className='Header_li'>
                    <FontAwesomeIcon icon={faCreditCard} style={{color: '#fff' }} className='LiIcons'/>
                    <h1 className='LiText'>Accounting</h1>
                </li>
                <li className='Header_li'>
                    <FontAwesomeIcon icon={faChartColumn} style={{color: '#fff' }} className='LiIcons'/>
                    <h1 className='LiText'>Reports</h1>
                </li>
                <li className='Header_li'>
                    <FontAwesomeIcon icon={faFileLines} style={{color: '#fff' }} className='LiIcons'/>
                    <h1 className='LiText'>Collateral</h1>
                </li>
                <li className='Header_li'>
                    <FontAwesomeIcon icon={faUserGear} style={{color: '#fff' }} className='LiIcons'/>
                    <h1 className='LiText'>Access Configuration</h1>
                </li>
                <li className='Header_li'>
                    <FontAwesomeIcon icon={faPiggyBank} style={{color: '#fff' }} className='LiIcons'/>
                    <h1 className='LiText'>Savings</h1>
                </li>
                <li className='Header_li'>
                    <FontAwesomeIcon icon={faBuildingColumns} style={{color: '#fff' }} className='LiIcons'/>
                    <h1 className='LiText'>Other Incomes</h1>
                </li>
                <li className='Header_li'>
                    <FontAwesomeIcon icon={faSquareParking} style={{color: '#fff' }} className='LiIcons'/>
                    <h1 className='LiText'>Payroll</h1>
                </li>
                <li className='Header_li'>
                    <FontAwesomeIcon icon={faShareFromSquare} style={{color: '#fff' }} className='LiIcons'/>
                    <h1 className='LiText'>Expenses</h1>
                </li>
                <li className='Header_li'>
                    <FontAwesomeIcon icon={faSignature} style={{color: '#fff' }} className='LiIcons'/>
                    <h1 className='LiText'>E-signarure</h1>
                </li>
                <li className='Header_li'>
                    <FontAwesomeIcon icon={faBriefcase} style={{color: '#fff' }} className='LiIcons'/>
                    <h1 className='LiText'>Investor Accounts</h1>
                </li>
                <li className='Header_li'>
                    <FontAwesomeIcon icon={faCalendarCheck} style={{color: '#fff' }} className='LiIcons'/>
                    <h1 className='LiText'>Calendar</h1>
                </li>
                <li className='Header_li'>
                    <FontAwesomeIcon icon={faGears} style={{color: '#fff' }} className='LiIcons'/>
                    <h1 className='LiText'>Settings</h1>
                </li>
                <li className='Header_li'>
                    <FontAwesomeIcon icon={faRightFromBracket} style={{color: '#fff' }} className='LiIcons'/>
                    <h1 className='LiText'>Sign Out</h1>
                </li>
            </div>
            </div>
    )
}
    
export default Headersleft