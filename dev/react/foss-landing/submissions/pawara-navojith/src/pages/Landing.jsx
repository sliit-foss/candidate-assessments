import Hero from '../components/Landing/Hero';
import { HeroSec } from '../assets/Landing/data/Landing/hero';
import WhatWeDo from '../components/Landing/WhatWeDo';
import ImgAndDesc from '../components/About/ImgAndDesc';
import {
  mascotAlt,
  mascotDesc,
  mascotImg,
  mascotTitle,
} from '../assets/Landing/data/Landing/mascot';
import ClubInfo from '../components/Landing/ClubInfo/ClubInfo';

const Landing = () => {
  return (
    <div>
      <div>
        <Hero
          btnLink={HeroSec.btnLink}
          btnText={HeroSec.btnText}
          desc={HeroSec.desc}
          imgAlt={HeroSec.imgAlt}
          imgSrc={HeroSec.imgSrc}
          title={HeroSec.title}
        />
      </div>
      <div>
        <WhatWeDo />
      </div>
      <div>
        <ImgAndDesc
          desc={mascotDesc}
          imgAlt={mascotAlt}
          id={'mascot'}
          imgSrc={mascotImg}
          first={'image'}
          title={mascotTitle}
        />
      </div>
      <div>
        <ClubInfo />
      </div>
    </div>
  );
};

export default Landing;
