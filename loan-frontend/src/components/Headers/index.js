import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faBell, faCommentDots, faUser, faSortDown} from '@fortawesome/free-solid-svg-icons'
const Headers = () => {
    return(
        <div className='HeaderContainer'>
            <div className='HeaderContainer1'>
                <h1 className='CreditappHead'>𝐂𝐑𝐄𝐃𝐈𝐓 𝐀𝐏𝐏</h1>
                <FontAwesomeIcon icon={faBars} style={{color: "#074418",}} />
            </div>
            <div className='HeaderContainer2'>
                <FontAwesomeIcon icon={faBell} style={{color: "#074418",}} className='FontIcon'/>
                <FontAwesomeIcon icon={faCommentDots} style={{color: "#074418",}} className='FontIcon'/>
                <FontAwesomeIcon icon={faUser} style={{color: "#074418",}} className='FontIcon'/>
                <h1 className='AdminHead'>𝐀𝐝𝐦𝐢𝐧</h1>
                <FontAwesomeIcon icon={faSortDown} style={{color: "#074418",}} className='FontIcon'/>
            </div>
        </div>
    )
}

export default Headers