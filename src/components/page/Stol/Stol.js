import React from 'react'
import "./Stol.css"
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";

const Stol = () => {
    return (
        <>
            <div className='Stol'>
                <b>Мебельная отрасль</b>
                <p>MEYOS</p>
            </div>
            <div className='StolContenier'>
                <div className='ManizlBox'>
                    <p><b><CiLocationOn /></b>Namangan</p>
                    <p><b><CiPhone /></b>+998992440061</p>
                    <p><b><MdOutlineMailOutline /></b>abduvohid.cmd@gmail.com</p>
                    <p><b><CiGlobe /></b>Namanagn.UZ</p>
                    <p><b><CiUser /></b>Sharipov Abduvohid</p>
                </div>
                <div className='MalumotBox'>
                    <p>Ассоциация мебельной и деревообрабатывающей промышленности <b>MEYOS</b> создана ведущими мебельными предприятиями Узбекистана с целью развития общего рынка мебельной и деревообрабатывающей промышленности, а также технологии деревообработки в Республике Узбекистан.</p>
                </div>
            </div>
        </>
    )
}

export default Stol
