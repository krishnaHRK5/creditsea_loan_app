import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUpWideShort, faFilter,faMagnifyingGlass, faGaugeHigh, faEllipsisVertical,faBell, faMoneyBill1,faCommentDots,faNairaSign, faCreditCard,faUser, faFileLines,faSortDown} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import axios from 'axios'
import { useState, useEffect } from 'react'
const User = () => {
    const [itemLists, setItemLists] = useState([])
        useEffect(() => {
            axios.get('https://creditseabackend-jjwi.onrender.com/getData')
            .then(result => setItemLists(result.data))
            .catch(err => console.log(err))
        })
    return(
    <div className='MainContainerUser'>
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
                                                                    <Link to='/Login' className='LinkElement'>
                                                                    <li className='popupli'>
                                                                        𝐋𝐨𝐠𝐨𝐮𝐭
                                                                    </li>
                                                                    </Link>
                                                                </div>
                                                                </Popup>
                                                            </div>
                         </div>
        </div>
        <div className='MainContainerUser1'>
            <div className='MainContainerUser2'>
                <div className='MainContainerUser3'>
                    <div className='UserTextIcon'>
                    <FontAwesomeIcon icon={faMoneyBill1}/>
                    </div>
                    <div className='MainContainerUser4'>
                        <p className='DeficitText'>DEFICIT</p>
                        <div className='MainContainerUser5'>
                        <FontAwesomeIcon icon={faNairaSign} style={{color: '#0A512FB2', height:'3vh', width:'3vw' }}/>
                            <p className='DeficitTexts'>0.0</p>                        
                        </div>
                    </div>
                </div>
                <div>
                    <Link to='/LoanForm'>
                    <button className='Loan_btn'>Get a Loan</button>
                    </Link>
                </div>
            </div>
            <div className='MainContainerUserSecond1'>
                <p className='BorrowCashText'>Borrow Cash</p>
                <p className='TransactText'>Transact</p>
                <p className='CastText'>Deposit Cash</p>
            </div>
            <div className='MainContainerUserThird'>
                <div className='SearchIcon'>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </div>
                <input type='search' className='SearchInput' placeholder='Search for loans'/>
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
                                                                            <th>Loan Officer</th>
                                                                            <th>Amount</th>
                                                                            <th>Reason</th>
                                                                            <th>Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {itemLists.map((user, index) => {
                                                                            return <tr>
                                                                                <td className='tdHeading'>{index+1}</td>
                                                                                <td className='tdHeading'>{user.Fullname}</td>
                                                                                <td className='tdHeading'>{user.MoneyNeed}</td>
                                                                                <td className='tdHeading'>{user.reason}</td>
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
    )
}

export default User