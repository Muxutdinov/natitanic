import React from 'react'
import './Trusted.css'
import l1 from '../assets/images/l1.svg'
import l2 from '../assets/images/l2.svg'
import l3 from '../assets/images/l3.svg'
import l4 from '../assets/images/l4.svg'

const Trusted = () => {
  return (
    <div className='Trusted'>
        <div className="t-title">Trusted by</div>
        <div className="t-logos">
            <img src={l4} alt="" />
            <img src={l3} alt="" />
            <img src={l2} alt="" />
            <img src={l1} alt="" />
        </div>
    </div>
  )
}

export default Trusted