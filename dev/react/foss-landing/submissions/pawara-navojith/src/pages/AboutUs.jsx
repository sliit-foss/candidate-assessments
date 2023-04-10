import ImgAndDesc from '../components/About/ImgAndDesc';
import { sec1, sec2, sec3 } from '../assets/Landing/data/heroSec';

const AboutUs = () => {
  return (
    <>
      <h1 className="main-title mt-5">About SLIIT FOSS Community</h1>
      <ImgAndDesc
        desc={sec1.desc}
        first={sec1.first}
        imgAlt={sec1.imgAlt}
        imgSrc={sec1.imgSrc}
        title={sec1.title}
      />
      <ImgAndDesc
        desc={sec2.desc}
        first={sec2.first}
        imgAlt={sec2.imgAlt}
        imgSrc={sec2.imgSrc}
        title={sec2.title}
      />
      <ImgAndDesc
        desc={sec3.desc}
        first={sec3.first}
        imgAlt={sec3.imgAlt}
        imgSrc={sec3.imgSrc}
        title={sec3.title}
      />
    </>
  );
};

export default AboutUs;
