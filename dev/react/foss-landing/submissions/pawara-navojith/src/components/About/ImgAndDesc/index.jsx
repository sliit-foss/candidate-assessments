import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';

const ImgAndDesc = ({ desc, id, first, imgAlt, imgSrc, title }) => {
  return (
    <div className="my-[1rem] max-[575px]:px-4 max-[575px]:py-8 min-[576px]:p-8 md:p-12 min-[992px]:p-20 min-[768px]:pb-0 min-[992px]:pb-0">
      <div className=" grid max-[768px]:justify-items-center justify-center grid-cols-12  max-[768px]:grid-cols-1 align-center justify-center ">
        {first === 'image' ? (
          <>
            <div className="flex justify-end min-[768px]:col-span-5 min-[768px]:pr-[2rem]">
              <img
                className={id ? 'w-[200px] h-[260px] mb-12 ' : 'w-[200px]'}
                src={imgSrc}
                alt={imgAlt}
              />
            </div>
            <div className="max-[768px]:col-span-12 min-[768px]:col-span-7 min-[768px]:ml-[3rem] min-[768px]:px-[15px] min-[768px]:grid min-[768px]:grid-cols-4 min-[768px]:mt-[1rem]">
              <div className="min-[768px]:col-span-3">
                <h3
                  className={
                    id
                      ? 'mb-[1rem] font-bold text-[2.5rem] mb-[1rem] text-center text-[#5a5af3] font-subHeadingFont '
                      : 'heroTitle '
                  }
                >
                  {title}
                </h3>
                <br />
                <p className={'heroDesc ' + id + '-p'}>{desc}</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div md={{ span: 8, order: 'first' }} xs={{ order: 'last' }}>
              <h3 className={'heroTitle ' + id + '-h3'}>{title}</h3>
              <p className={'heroDesc ' + id + '-p'}>{desc}</p>
            </div>
            <div md={{ span: 4, order: 'last' }} xs={{ order: 'first' }}>
              <img
                className={'heroImg ' + id + '-img'}
                src={imgSrc}
                alt={imgAlt}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImgAndDesc;
