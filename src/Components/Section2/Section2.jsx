import React from 'react';
import icon5 from '../../images/icon5.png';
import "../Section2/Section2.css";

function Section2() {
  return (
    <div className='section2'>
        <div className='left'>
            <img src={icon5} alt='icons' style={{width: 450}} />
        </div>
        <div className='right'>
            <div className='block'>
                <p className='heading'>They grow so fast</p>
                <p className='normal'>Your USDTs and USDCs feel so at home here, that they will grow by 10% by the end of the year. Allow your stable coins to generate stable returns for you.</p>
            </div>
            <div className='block'>
                <p className='heading'>No secrets, no fine print</p>
                <p className='normal'>There are no hidden fees on Flint. Whatever charges you will incur will be shared with you upfront. We take transparency seriously.</p>
            </div>
            <div className='block'>
                <p className='heading'>Unconditionally unclocked</p>
                <p className='normal'>There are no lock-in periods on Flint. You can withdraw anytime and have the funds in your wallet instantly. We keep your investment liquid, even when its growing.</p>
            </div>
        </div>
    </div>
  )
}

export default Section2