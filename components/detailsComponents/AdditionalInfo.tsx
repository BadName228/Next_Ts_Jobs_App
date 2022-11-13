import React from 'react'
import style from "../../styles/AdditionalInfo.module.css"

type Props = {
    employment: string[]
    benefits: string[]
}

const AdditionalInfo = ({employment, benefits}: Props) => {
  return (
    <div id={style.AdditionalInfo}>
        <h1 className={style.h1}>Additional info</h1>
        <h3 className={style.h3}>Employment type</h3>
        <div className={style.grid_container}>
            {employment.map(el => <div className={style.grid_item1} key={el}>{el}</div>)}
        </div>
        <h3 className={style.h3}>Benefits</h3>
        <div className={style.grid_container}>
            {benefits.map(el => <div className={style.grid_item2} key={el}>{el}</div>)}
        </div>
    </div>
  )
}

export default AdditionalInfo