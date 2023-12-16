import React from 'react'
import Slider from "react-slick"; 

function Banner() {
    const settings = {
        infinite: true,
        autoplay : true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false,
        zIndex :-1,
      };
  return (
    <>
      <div className='w-full h-full mb-[-15%] mdl:mb-[-20%]'>
        <Slider {...settings}>
          <div className=''>
            <img className='' src='https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img22/Toys/HTL2023/GW/Homepage_DesktopHeroTemplate_3000x1200-Toy-Fiesta-APAY_2x_unrec._CB570529351_.jpg'/>
          </div>
          <div>
            <img src='https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img22/wearables/BAU_GW/New_launchGW_tallhero_3000x1200._CB597027259_.jpg'/>
          </div>
          <div>
            <img src='https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg'/>
          </div>
          <div>
            <img src='https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img2020/img21/apparelGW/wrsdec23/ATF/unrec/pc/3-3000._CB570664314_.jpg'/>
          </div>
          <div>
            <img src='https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img15/4th/sept/unrechero/8thslot/Tws_Tallhero_3000x1200._CB596103422_.jpg'/>
          </div>
          <div>
            <img src='https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img23/Fashion/Event/Gateway/DecWRS/Event/Hero/AF-Unrec-3000._CB570585186_.jpg'/>
          </div>
          <div>
            <img src='https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img2020/img21/apparelGW/wrsdec23/ATF/unrec/pc/2-3000._CB570664314_.jpg'/>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default Banner
