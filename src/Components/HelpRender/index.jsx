import React from 'react'
import style from './style.module.css'
import HelpProps from "../../Props/HelpProps";
import help1 from '../../Images/cha2.jpg'
import help2 from '../../Images/cha3.jpg'
import help3 from '../../Images/cha4.jpg'


const HelpRender = (props) => {

    return (
        <div className={style.helpBox}>
            <small data-aos="fade-zoom-in"
                   data-aos-easing="ease-in-back"
                   data-aos-delay="200"
                   data-aos-offset="0">feature causes</small>
            <h1 data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0">Most of the poor childern get help by your donation</h1>
            <div className={style.cardBox}>

            <HelpProps
                CardImage={help1}
                Cardtext='Emergency campaign for medical treatment'
                Goals='$10,000'
                Raised='$3,000'
                Togo='$5000'
                Button='Donate Now'
            />
            <HelpProps
                CardImage={help2}
                Cardtext='urgent raising for 100 homeless children'
                Goals='$11,000'
                Raised='$4,000'
                Togo='$7000'
                Button='Donate Now'
            />
            <HelpProps
                CardImage={help3}
                Cardtext='Raising fund for better child education'
                Goals='$13,000'
                Raised='$3,000'
                Togo='$10,000'
                Button='Donate Now'
            />
            </div>
        </div>
    )
}

export default HelpRender;
