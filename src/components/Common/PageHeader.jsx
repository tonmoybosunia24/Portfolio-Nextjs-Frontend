import Link from 'next/link';
import bannerBackground from '../../../public/Images/Banner/PageHeaderBanner.png'
import Navbar from './Navbar';
import { MdKeyboardArrowRight } from 'react-icons/md';

const PageHeader = ({ title, breadcrumb }) => {

  return (
    /* ---------------------Page Header-------------------- */
    <div className='w-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bannerBackground.src})` }}>

      {/* ----------------------Navbar-------------------- */}
      <div><Navbar></Navbar></div>

      {/* ----------------Bread-Crump Container----------- */}
      <div className="flex flex-col justify-center items-center font-rubik gap-3 py-16 md:py-24 lg:py-28 2xl:py-36 -mt-10">
        {/* -----------------Braed-Crump Title------------ */}
        <h2 className="font-bold text-4xl">{title}</h2>
        {/* -------------Bread-Crumb Navigation----------- */}
        <div className="flex items-center font-medium">
          <Link className="text-gray-light" href='/'>Home</Link>
          <MdKeyboardArrowRight className="text-gray-light text-xl" />
          <p className="text-pink-primary">{breadcrumb}</p>
        </div>
      </div>

    </div>
  );
};

export default PageHeader;