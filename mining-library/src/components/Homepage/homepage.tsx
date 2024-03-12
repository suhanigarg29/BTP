import React from 'react'
import style from './homepage.module.css'
const Home = () => {
    return (
        <>
            <div className={style.homeBg}>
                <p className={style.homeh3}>IIT BHU Presents</p>
                <h1 className={style.homeh1}>MINE MASTER</h1>
                <p className={style.homeh3}>We seek to provide a centralized platform containing comprehensive resources related to various courses in Mining Engineering. From curated study materials and class notes to insightful reference material, we offer everything you need to succeed.  Sharpen your skills and dive deep into the world of mining engineering with Mine Master.</p>
            </div>

            <div>
                <h1 className={style.chooseSem}>Choose Semester</h1>

            </div>
        </>
    )
}

export default Home