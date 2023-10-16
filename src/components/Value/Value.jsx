import React from 'react'
import './Value.css'
import{Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel,AccordionItemState} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from '../../utils/accordion'
const Value = () => {
  return (
    <div>
      <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            {/* leftside */}
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="" />
                </div>
            </div>
            {/* rightside */}
            <div className="flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We Give to You</span>
                <span className='secondaryText'>
                    We believe in giving you the best experience possible with our products and services, so we want everyone who uses them to feel comfortable while using it.<br/>
                    Our value is based on the quality of our products and services, we are committed to providing you with a high standard of care that will make.
                </span>
                <Accordion className='accordion'allowMultipleExpanded={false} preExpanded={[0]}>
                    {
                        data.map((item, i)=> {
                            return(
                                <AccordionItem className='accordionItem' key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <div className="flexCenter icon">{item.icon}</div>
                                            <span className="primaryText">{item.heading}</span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>

                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                        </AccordionItemPanel>
                                </AccordionItem>

                            );
                        })}
                    
                </Accordion>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Value
