import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from './Card';
import './style.css';
import Col from 'react-bootstrap/esm/Col';

const ClubInfo = () => {
  return (
    <div>
      <div className="grid grid-cols-12 px-[32px] pb-[32px] min-[768px]:px-12 min-[768px]:pb-12 min-[992px]:px-20 min-[992px]:pb-20 ">
        <div className="px-[15px] max-[575px]:col-span-12 min-[576px]:col-span-6 min-[768px]:col-span-3">
          <Card icon={'fa-calendar'} number={7} title={'Events'} />
        </div>
        <div className="px-[15px] max-[575px]:col-span-12 min-[576px]:col-span-6 min-[768px]:col-span-3">
          <Card icon={'fa-users'} number={119} title={'Members'} />
        </div>
        <div className="px-[15px] max-[575px]:col-span-12 min-[576px]:col-span-6 min-[768px]:col-span-3">
          <Card icon={'fa-github'} number={67} title={'Projects'} />
        </div>
        <div className="px-[15px] max-[575px]:col-span-12 min-[576px]:col-span-6 min-[768px]:col-span-3">
          <Card icon={'fa-video-camera'} number={12} title={'Webinars'} />
        </div>
      </div>
    </div>
  );
};

export default ClubInfo;
