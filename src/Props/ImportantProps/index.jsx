import React from 'react'
import style from './style.module.css'

const ImportantProps = (props) => {

    return (
        <div>
            <section className={style.cardContainer}>
                <div data-aos="fade-right"
                     data-aos-offset="300"
                     data-aos-easing="ease-in-sine" className={style.card}>
                    <div className={style.iconBox}>{props.Icon}</div>
                    <h3>{props.Header}</h3>
                    <p>{props.Paragraph}</p>
                    <button><a href="">{props.Button}</a></button>
                </div>
            </section>
        </div>
    )
}

export default ImportantProps;