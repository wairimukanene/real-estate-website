import React from 'react'
import './Value.css'
import{Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel,AccordionItemState} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
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
        </div>
      </section>
    </div>
  )
}

export default Value
