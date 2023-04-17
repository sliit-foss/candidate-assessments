import Container from 'react-bootstrap/esm/Container';

const Card = ({ icon, number, title }) => {
  return (
    <div className="group my-[15px] pt-[40px] py-[20px] pb-[37px] hover:bg-[#5a5af3] bg-[var(--card-color-secondary)] rounded-[30px] w-[100%] text-[#d2d2d2] hover:text-[white]">
      <div>
        <i className={'text-[60px] mb-[15px] fa ' + icon}></i>
      </div>
      <div className="font-bold text-[#666] group-hover:text-[white]  text-[32px] leading-[28px]">
        {number}
      </div>
      <div className="font-medium text-[#666] group-hover:text-[white]  text-[18px] mt-[5px]">
        {' '}
        {title}
      </div>
    </div>
  );
};

export default Card;
