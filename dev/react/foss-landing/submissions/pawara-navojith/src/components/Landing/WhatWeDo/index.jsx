import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import {
  wwdDesc,
  wwdTitle,
} from '../../../assets/Landing/data/Landing/whatWeDo';
import './style.css';
const WhatWeDo = () => {
  return (
    <div className="bg-[var(--background-color-secondary)] max-[575px]:px-4 max-[575px]:py-8 min-[576px]:p-8 md:p-12 min-[992px]:p-20">
      <div className="mx-auto p-[15px] max-[575px]:w-[100%] min-[768px]:w-[66.666667%]">
        <h2 className="font-bold text-[2.5rem] text-[#5a5af3] mb-[1rem] font-subHeadingFont">
          {wwdTitle}
        </h2>{' '}
        <br />
        <p className="text-[1.2rem] leading-[2rem] text-[var(--text-color-primary)]">
          {wwdDesc}
        </p>
      </div>
    </div>
  );
};

export default WhatWeDo;
