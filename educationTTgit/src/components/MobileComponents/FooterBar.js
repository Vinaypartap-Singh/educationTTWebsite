import React from 'react'
import {AiFillHome ,AiFillInfoCircle,AiFillCustomerService,AiFillContacts,AiOutlineWhatsApp} from "react-icons/ai"

const FooterBar = () => {
  return (
    <div>
        <div className="footer_bar_mobile">
            <div className="footer_nav">
                <ul className="navitems_mobile">
                    <li className="navlink_mobile"> <AiFillHome className='mobile_footer_icon' /> Home </li>
                    <li className="navlink_mobile"><AiFillInfoCircle className='mobile_footer_icon' /> About </li>
                    <li className="navlink_mobile"><AiFillCustomerService className='mobile_footer_icon' /> Service </li>
                    <li className="navlink_mobile"><AiFillContacts className='mobile_footer_icon' /> Contact Us </li>
                    <li className="navlink_mobile"><AiOutlineWhatsApp className='mobile_footer_icon' /> Whatsapp </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default FooterBar