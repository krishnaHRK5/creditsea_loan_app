import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFilter,faArrowUpWideShort, faEllipsisVertical,faSignature,faSquareParking,faGears,faRightFromBracket,faBriefcase,faCalendarCheck,faChartColumn,faShareFromSquare,faBuildingColumns,faPiggyBank,faUserGear,faFileLines,faScaleBalanced, faCreditCard,faCircleUser,faGaugeHigh, faUserMinus, faMoneyBill1, faUserPlus,faUser, faBars, faBell, faCommentDots, faSortDown, faMoneyBills, faUserCheck, faNairaSign} from '@fortawesome/free-solid-svg-icons'
import Popup from 'reactjs-popup'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
const AppliedLoans = () => {
        const [itemLists, setItemLists] = useState([])
        
        useEffect(() => {
            axios.get('https://creditseabackend-jjwi.onrender.com/getData')
            .then(result => setItemLists(result.data))
            .catch(err => console.log(err))
        })
        
    return(
    <div className='MainContainer'>
        <div className='HeaderContainer'>
                    <div className='HeaderContainer1'>
                        <h1 className='CreditappHead'>𝐂𝐑𝐄𝐃𝐈𝐓 𝐀𝐏𝐏</h1>
                        <FontAwesomeIcon icon={faBars} style={{color: "#074418",}} />
                    </div>
                    <div className='HeaderContainer2'>
                        <FontAwesomeIcon icon={faBell} style={{color: "#074418",}} className='FontIcon'/>
                        <FontAwesomeIcon icon={faCommentDots} style={{color: "#074418",}} className='FontIcon'/>
                        <FontAwesomeIcon icon={faUser} style={{color: "#074418",}} className='FontIcon'/>
                        <h1 className='AdminHead'>𝐕𝐞𝐫𝐢𝐟𝐢𝐞𝐫</h1>
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
                                            <Link to='/login' className='LinkElement'>
                                            <li className='popupli'>
                                                𝐋𝐨𝐠𝐨𝐮𝐭
                                            </li>
                                            </Link>
                                        </div>
                                        </Popup>
                                    </div>    
                    </div>
                </div>
        <div className='Header_row'>
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
                    
            <div className='HeaderContainer5'>
                <h1 className='DashHead'><span className='DashHeadSpan'>Dashboard{'>'}</span>Loans</h1>
                <div className='HeaderContainer66'>
                <div className='HeaderContainer7'>
                        <div className='HeaderContainerIcon'>
                            <FontAwesomeIcon icon={faMoneyBill1} style={{color: '#fff'}}/>
                        </div>
                        <div className='HeaderContainerText'>
                            <h1 className='TextHead'>50</h1>
                            <p className='TextPara'>LOANS</p>
                        </div>
                    </div>
                    <div className='HeaderContainer7'>
                        <div className='HeaderContainerIcon'>
                            <FontAwesomeIcon icon={faUserMinus} style={{color: '#fff'}}/>
                        </div>
                        <div className='HeaderContainerText'>
                            <h1 className='TextHead'>100</h1>
                            <p className='TextPara'>BORROWERS</p>
                        </div>
                    </div>
                    <div className='HeaderContainer7'>
                        <div className='HeaderContainerIcon'>
                            <FontAwesomeIcon icon={faMoneyBills} style={{color: '#fff'}}/>
                        </div>
                        <div className='HeaderContainerText'>
                            <h1 className='TextHead'>550,000</h1>
                            <p className='TextPara'>CASH DISBURSED</p>
                        </div>
                    </div>
                    <div className='HeaderContainer7'>
                        <div className='HeaderContainerIcon'>
                            <FontAwesomeIcon icon={faPiggyBank} style={{color: '#fff'}}/>
                        </div>
                        <div className='HeaderContainerText'>
                            <h1 className='TextHead'>450,000</h1>
                            <p className='TextPara'>SAVINGS</p>
                        </div>
                    </div>
                    <div className='HeaderContainer7'>
                        <div className='HeaderContainerIcon'>
                            <FontAwesomeIcon icon={faUserCheck} style={{color: '#fff'}}/>
                        </div>
                        <div className='HeaderContainerText'>
                            <h1 className='TextHead'>30</h1>
                            <p className='TextPara'>REPAID LOANS</p>
                        </div>
                    </div>
                    <div className='HeaderContainer7'>
                        <div className='HeaderContainerIcon'>
                            <FontAwesomeIcon icon={faNairaSign} style={{color: '#fff'}}/>
                        </div>
                        <div className='HeaderContainerText'>
                            <h1 className='TextHead'>1,000,000</h1>
                            <p className='TextPara'>CASH RECEIVED</p>
                        </div>
                    </div>    
                </div>
                <div className='LoanListContainer1'>
                                <div className='LoanListContainer2'>
                                    <h1 className='AppliedText'>Applied Loans</h1>
                                    <div className='LoanListContainer3'>
                                        <div className='LoanListContainer4'>
                                            <FontAwesomeIcon icon={faArrowUpWideShort} style={{color: "#4B506D"}}/>
                                            <h1 className='SortText'>Sort</h1>
                                        </div>
                                        <div className='LoanListContainer4'>
                                            <FontAwesomeIcon icon={faFilter} style={{color: "#4B506D"}}/>
                                            <h1 className='SortText'>Filter</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className='User_div_1'>
                                <table cellPadding={10} cellSpacing={0}>
                                    <thead>
                                        <tr>
                                            <th>𝖲.𝗇𝗈</th>
                                            <th>User Recent Activity</th>
                                            <th>Customer name</th>
                                            <th>Amount</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {itemLists.map((user, index) => {
                                            return <tr>
                                                <td className='tdHeading'>{index+1}</td>
                                                <td className='tdHeading'>{user.reason}</td>
                                                <td className='tdHeading'>{user.Fullname}</td>
                                                <td className='tdHeading'>{user.MoneyNeed}</td>
                                                <td className='tdHeading'>
                                                    <button className='Pending-btn'>Pending</button>
                                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                                </td>
                                            </tr>
                                        })
                                        }
                                    </tbody>
                                </table>
                                </div>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default AppliedLoans