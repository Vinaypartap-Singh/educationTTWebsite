import React from 'react'

const FooterSection = () => {
  return (
    <div>
        <div className="footer_section">
            <div className="footer_update_section">
                <input type="email" placeholder='Enter your Email' className='input_user_footer' />
                <button className='subscribe_button'>Subscribe Now</button>
            </div>
        </div>

        <div className="copyright">
            <h6>Copyright &copy; 2022 | Powered by <span> <a href="https://vinaydeveloper.netlify.app/">VinayPartap Singh</a> </span> </h6>
        </div>
    </div>
  )
}

export default FooterSection