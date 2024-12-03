import React from 'react';
import Image from 'next/image';
import HM from '../public/images/hm.png';
import OBEY from '../public/images/obey.png' 
import SHOPIFY from '../public/images/shopify.png' 
import LACTOSE from '../public/images/lacoste.png' 
import LEVIS from '../public/images/levis.png' 
import AMAZON from '../public/images/amazon.png' 

export default function BrandsSlider(){
    return(
        <div>
            <div className="slider" data-reverse="true" style={{
                '--width': '200px',
                '--height': '100px',
                '--quantity': '6'} as React.CSSProperties}>
                <div className="list">
                    <div className="item" style={{'--position': 1} as React.CSSProperties}><Image src={HM} alt=""  className='w-[80px] h-[40px] mt-[24px]'/></div>
                    <div className="item" style={{'--position': 2} as React.CSSProperties}><Image src={OBEY} alt=""  className='w-[100px] h-[60px] mt-[15px]'/></div>
                    <div className="item" style={{'--position': 3} as React.CSSProperties}><Image src={SHOPIFY} alt=""  className='w-[120px] h-[80px] mt-[5px]'/></div>
                    <div className="item" style={{'--position': 4} as React.CSSProperties}><Image src={LACTOSE} alt=""  className='w-[120px] h-[40px] mt-[25px]'/></div>
                    <div className="item" style={{'--position': 5} as React.CSSProperties}><Image src={LEVIS} alt=""  className='w-[80px] h-[40px] mt-[28px]'/></div>
                    <div className="item" style={{'--position': 6} as React.CSSProperties}><Image src={AMAZON} alt=""  className='w-[100px] h-[60px] mt-[22px]'/></div>

                </div>
            </div>
        </div>
    )
}