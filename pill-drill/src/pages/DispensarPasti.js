import React from 'react'
import style from '../styles/Dispensar.module.css'
import Button from '../components/Buttons';
import Image from 'next/image'
import dispensarP from '../pages/pastilla1'

function DispensarPastilla() {
  return (
    <div className={style.container}>
    <Image
      src={'/Image/DISPENSAR.png'}
      alt="Dispensar"
      width={350}
      height={350}
     />
      <Button className={style.dispensar} onClick={() => dispensarP()}>
        <div className={style.contenidoEncima}>DISPENSAR PASTILLA</div>
      </Button>
              
    </div>
  )
}

export default DispensarPastilla