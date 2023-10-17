import React from 'react'
import "./Contact.css";
import {MdCall} from 'react-icons/md';
import{BsFillChatDotsFill} from 'react-icons/bs';
import{HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <div>
      <section className="c-wrapper">
        <div className="paddings innerwidth flexCenter c-container">
            {/* leftside */}
            <div className="flexColStart c-left">
            <span className='orangeText'>Our Contacts</span>
            <span className='primaryText'>Easy to Contact us</span>
            <span className='SecondaryText'>we are always ready to help by providing the best service and we believe we are the better option to find a good place to live and make your life better.</span>

            <div className="flexColStart contactModes">
                {/* first-row */}
                <div className="flexStart row">
                  {/* firstmode */}
                  <div className='flexColCenter mode'>
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <MdCall size={25}/>

                        </div>
                        <div className="flexColStart detail">
                            <span className='primaryText'>Call</span> 
                            <span className='secondaryText'>0710789678</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Call Now</div>

                </div>
                {/* secondMode */}
                <div className='flexColCenter mode'>
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25}/>

                        </div>
                        <div className="flexColStart detail">
                            <span className='primaryText'>Chat</span> 
                            <span className='secondaryText'>0710789678</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Chat Now</div>

                </div>
            </div>
            {/* second-row */}
            <div className="flexStart row">
                  {/* Thirdmode */}
                  <div className='flexColCenter mode'>
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25}/>

                        </div>
                        <div className="flexColStart detail">
                            <span className='primaryText'> VideoCall</span> 
                            <span className='secondaryText'>0710789678</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Video Call Now</div>

                </div>
                {/* FourthMode */}
                <div className='flexColCenter mode'>
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <HiChatBubbleBottomCenter size={25}/>

                        </div>
                        <div className="flexColStart detail">
                            <span className='primaryText'>Message</span> 
                            <span className='secondaryText'>0710789678</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Message Now</div>

                </div>
            </div>


            </div>
            </div>
            {/* right side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>

        
        </div>
      </section>
    </div>
  )
}

export default Contact
