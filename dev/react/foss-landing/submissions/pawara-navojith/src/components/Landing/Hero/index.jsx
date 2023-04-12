import './styles.css';
import { useNavigate } from 'react-router-dom';

const Hero = ({ btnLink, btnText, desc, imgAlt, imgSrc, title }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(btnLink);
  };
  return (
    <div className="p-[2rem] md:p-[3rem] lg:p-[5rem]">
      <div className="grid p-[15px] grid-cols-1 min-[768px]:grid-cols-2 gap-4">
        <div className="my-auto">
          <h3 className="font-bold text-5xl leading-normal mb-4 bg-clip-text text-start L-heroTitle">
            {title}
          </h3>
          <br />
          <p className="text-[1.2rem] leading-8 text-[var(--text-primary)] text-justify mb-[12px]">
            {desc}
          </p>
          <br />
          <button
            className="bg-[#5a5af3] text-white mr-[10px] rounded-[50px] text-[15px] tracking-[0.5px] d-block pt-[8px] pb-[9px] px-[20px] w-auto"
            onClick={handleClick}
          >
            {btnText}
          </button>
        </div>
        <div className="text-center min-[768px]:p-[15px]">
          <img
            className="min-[768px]:mt-[-3rem] lg:p-[15px]"
            src={imgSrc}
            alt={imgAlt}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
