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
          <h3 className="L-heroTitle">{title}</h3>
          <br />
          <p className="L-heroDesc mb-[12px]">{desc}</p>
          <br />
          <button className="L-heroBtn" onClick={handleClick}>
            {btnText}
          </button>
        </div>
        <div className="text-center min-[768px]:p-[3rem]">
          <img className="L-heroImg lg:p-[15px]" src={imgSrc} alt={imgAlt} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
